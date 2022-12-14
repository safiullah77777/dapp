export const env = {
  CHAIN_ID: 1,
  CHAIN_NAME: 'mainnet',
  PROVIDER: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,
  ETHERSCAN_URL: 'https://etherscan.io/',
  ADDRESSES: {
    MULTICALL: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
    NFT_LIQUIDITY: '0x53C20E57178c541A3467Db90190a3EE619aae548',
  },
}
