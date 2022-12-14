import { Contract, constants, providers, utils } from 'ethers'
import BigNumber from 'bignumber.js'
import { NETWORK_NAMES } from './constants'
import { config } from '../../configs'
import { AppProvider } from 'blockchain/types'

export function fromNetworkIdToName(networkId: number) {
  return NETWORK_NAMES[networkId] || 'Unknown Network'
}

export function parseDefaultProvider(): AppProvider {
  let defaultProvider: providers.InfuraProvider | providers.JsonRpcProvider
  if (config.PROVIDER.indexOf('.infura.io') !== -1) {
    const apiKey = config.PROVIDER.split('/')
      .reverse()
      .filter((a) => a !== '')[0]
    defaultProvider = new providers.InfuraProvider(
      config.PROVIDER.substring(8, config.PROVIDER.indexOf('.infura.io')),
      apiKey,
    )
  } else {
    defaultProvider = new providers.JsonRpcProvider(config.PROVIDER)
  }

  return defaultProvider
}

export function detectWeb3ProviderObject() {
  const defaultProvider = parseDefaultProvider()

  let provider: AppProvider
  const ethereum = (window as any).ethereum

  if (ethereum) {
    provider = new providers.Web3Provider(ethereum as any)
  } else {
    provider = defaultProvider
  }

  return { provider, defaultProvider, ethereum }
}

export function getCurrentNetworkConfig() {
  return {
    networkId: config.CHAIN_ID,
    chainName: config.CHAIN_NAME,
  }
}

export function scaleDown(value: BigNumber | undefined): BigNumber {
  return value && !value.isNaN()
    ? value.div(new BigNumber(10).pow(18)).decimalPlaces(6, BigNumber.ROUND_UP)
    : new BigNumber(0)
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value
    .multipliedBy(new BigNumber(10000).plus(new BigNumber(1000)))
    .dividedBy(new BigNumber(10000))
    .decimalPlaces(0)
}

// x = currentBalance / divideNumber
export function calculateLowerSellPrice(
  currentBalance: BigNumber | undefined,
  divideNumber: number | undefined,
): BigNumber | undefined {
  if (!currentBalance || currentBalance.isNaN()) {
    return undefined
  }

  if (!divideNumber || isNaN(divideNumber)) {
    return undefined
  }

  return currentBalance.dividedBy(divideNumber)
}

// x >= (currentBalance + x) / divideNumber * (determinedPercentages + 100) / 100
export function calculateUpperBuyPrice(
  lowerSellPrice: BigNumber | undefined,
  divideNumber: number | undefined,
  determinedPercentages: number | undefined,
): BigNumber | undefined {
  if (!lowerSellPrice || lowerSellPrice.isNaN()) {
    return undefined
  }

  if (!divideNumber || isNaN(divideNumber)) {
    return undefined
  }

  if (!determinedPercentages || isNaN(determinedPercentages)) {
    return undefined
  }

  return lowerSellPrice
    .multipliedBy(new BigNumber(determinedPercentages).plus(100))
    .dividedBy(100)
    .dividedBy(
      new BigNumber(1).minus(
        new BigNumber(1)
          .dividedBy(divideNumber)
          .multipliedBy(new BigNumber(determinedPercentages).plus(100))
          .dividedBy(100),
      ),
    )
}

// returns the checksum address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return utils.getAddress(value)
  } catch {
    return false
  }
}

// account is not optional
export function getSigner(library: AppProvider, account: string): providers.JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: AppProvider, account?: string): AppProvider | providers.JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: AppProvider, account?: string): Contract {
  if (!isAddress(address) || address === constants.AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export const getTxErrorMessage = (err: any) => {
  let message: string = err.message

  if (err.message?.includes('execution reverted:')) {
    // Init regex inside a function to reset regex (reset lastIndex)
    const REGEX_GET_MESSAGE = /execution reverted:([^"]*)/gm

    const match = REGEX_GET_MESSAGE.exec(err.message)
    message = `${match ? match[1] : err.message}. Refresh the page can help solve the problem.`
  }

  if (err.message?.includes('user rejected transaction')) {
    message = 'User denied transaction signature.'
  }

  if (err.message?.includes('underlying network changed')) {
    message = 'Underlying network changed.'
  }

  return message
}

export async function executeMulticall(
  multicall: Contract | null,
  calls: { address: string; abi: any; method: string; params: any[] }[],
) {
  if (!multicall) {
    return []
  }

  const callsdata = calls.map((call) => {
    const itf = new utils.Interface(call.abi)
    return [call.address.toLowerCase(), itf.encodeFunctionData(call.method, call.params)]
  })

  const results: { returnData: string }[] = await multicall.callStatic.tryAggregate(true, callsdata)

  if (!results) {
    return calls.map((_) => [])
  }

  return calls.map((call, idx) => {
    const itf = new utils.Interface(call.abi)
    return itf.decodeFunctionResult(call.method, results[idx].returnData)
  })
}
