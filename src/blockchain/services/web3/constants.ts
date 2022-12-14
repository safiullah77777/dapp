import { abi as NFT_ABI } from '../../abis/NFT.abi'
import { abi as NFT_LIQUIDITY_ABI } from '../../abis/NFTLiquidity.abi'
import { abi as MULTICALL_ABI } from '../../abis/Multicall2.abi'

export { NFT_ABI, NFT_LIQUIDITY_ABI, MULTICALL_ABI }

export const NETWORK_NAMES: Record<number, string> = {
  1: 'Ethereum',
  3: 'Ropsten',
  4: 'Rinkeby',
  5: 'Goerli',
  42: 'Kovan',
  56: 'Binance Smart Chain',
  97: 'BSC Testnet',
}
