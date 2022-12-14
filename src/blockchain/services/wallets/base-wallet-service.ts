import { AppProvider } from 'blockchain/types'
import { fromNetworkIdToName, parseDefaultProvider } from '../web3'

export type BaseWalletServiceProps = {
  networkId: number
  chainName: string

  address?: string
}

export class BaseWalletService {
  ethereum: any
  provider: AppProvider

  networkId: number
  chainName: string

  address?: string

  constructor(props: BaseWalletServiceProps) {
    this.ethereum = null
    this.provider = parseDefaultProvider()

    this.networkId = props.networkId
    this.chainName = props.chainName

    this.address = props.address
  }

  connect = async (onEthereumError: any = null, onNetworkError: any = null) => {
    if (!this.provider && !this.ethereum) {
      this._returnEthereumError(onEthereumError, 'Error: Something went wrong connecting with your Metamask')
      return null
    }

    const currentNetworkId = await this._getCurrentNetworkId()

    if (!currentNetworkId) {
      this._returnEthereumError(onEthereumError, 'Error: Cannot find current network ID')
      return null
    } else if (currentNetworkId !== this.networkId) {
      if (typeof onNetworkError === 'function') onNetworkError(currentNetworkId)
      return null
    }

    try {
      this.address = await this._requestAccounts()
    } catch (err: any) {
      this._returnEthereumError(onEthereumError, err.message)
      return null
    }

    if (!this.address) {
      this._returnEthereumError(onEthereumError, 'Error: Cannot find any available addresses')
      return null
    }

    return this.address
  }

  getDisconnected = (clearAccount?: any, importAccount?: any, wallet?: any) => {
    this._throwErrorOnNetworkError(clearAccount)

    this.ethereum?.on('accountsChanged', async (accounts: any) => {
      if (accounts[0] === this.address) return

      this.address = await this._requestAccounts()

      if (!!wallet) wallet.address = this.address
      if (!!importAccount) importAccount(this.address, wallet, wallet.getWalletType())
    })

    this.ethereum?.on('chainChanged', (networkId: any) => {
      if (+networkId === this.networkId) return
      if (!!clearAccount) {
        clearAccount()
      }
    })
  }

  _throwErrorOnNetworkError = async (actionOnError?: any) => {
    const currentNetworkId = await this._getCurrentNetworkId()
    if (!currentNetworkId || +currentNetworkId !== this.networkId) {
      if (actionOnError) {
        actionOnError()
      } else {
        throw Error(`Please make sure your network is on ${fromNetworkIdToName(this.networkId)}`)
      }
    }
  }

  _getCurrentNetworkId = async () => {
    let currentNetworkId: number

    if (this.provider) {
      const network = await this.provider.getNetwork()
      currentNetworkId = network.chainId
    } else {
      currentNetworkId = parseInt(this.ethereum.networkVersion, 10)
    }

    return currentNetworkId
  }

  _requestAccounts = async () => {
    let accounts

    if (this.ethereum) {
      accounts = await this.ethereum.request({ method: 'eth_requestAccounts' })
    } else {
      accounts = await this.provider.listAccounts()
    }

    const legacyAccount = accounts[0]
    const newAccount = accounts.result ? accounts.result[0] : null

    return legacyAccount ? legacyAccount : newAccount
  }

  _returnEthereumError = (onEthereumError: any, message: string) => {
    if (typeof onEthereumError === 'function') onEthereumError(message)
  }
}
