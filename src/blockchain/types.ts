import { providers } from 'ethers'
import { ChainId } from './enums'

export type Config = {
  CHAIN_ID: ChainId

  CHAIN_NAME: string

  PROVIDER: string

  ADDRESSES: {
    MULTICALL: string

    NFT_LIQUIDITY: string
  }

  ETHERSCAN_URL: string
}

export type AppProvider = providers.Web3Provider | providers.InfuraProvider | providers.JsonRpcProvider
