import { useEffect } from 'react'
import { useApplication, useInterval } from 'shared/hooks'
import { executeMulticall, getTxErrorMessage, NFT_ABI } from 'blockchain/services'
import { config } from '../configs'
import { useMulticallContract } from './use-contract'

export const useFetchNftInfo = (address?: string) => {
  const application = useApplication()
  const multicall = useMulticallContract()

  const callData = async () => {
    if (!address || !multicall) {
      return
    }

    try {
      const [[name], [symbol], [totalSupply], [totalNFTsAvailable]] = await executeMulticall(multicall, [
        {
          address,
          abi: NFT_ABI,
          method: 'name',
          params: [],
        },
        {
          address,
          abi: NFT_ABI,
          method: 'symbol',
          params: [],
        },
        {
          address,
          abi: NFT_ABI,
          method: 'totalSupply',
          params: [],
        },
        {
          address,
          abi: NFT_ABI,
          method: 'balanceOf',
          params: [config.ADDRESSES.NFT_LIQUIDITY],
        },
      ])

      application.setInfo1({
        name,
        symbol,
        totalSupply: totalSupply.toNumber(),
        totalNFTsAvailable: totalNFTsAvailable.toNumber(),
      })
    } catch (err) {
      console.log('useFetchNftInfo::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
  }

  useEffect(() => {
    callData()
    // eslint-disable-next-line
  }, [address])

  useInterval(() => {
    console.debug(`[useFetchNftInfo] polling to refresh..`)
    callData()
  }, 15000)
}
