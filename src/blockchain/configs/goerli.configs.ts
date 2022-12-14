export const env = {
  CHAIN_ID: 5,
  CHAIN_NAME: 'goerli',
  PROVIDER: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,
  ETHERSCAN_URL: 'https://goerli.etherscan.io/',
  ADDRESSES: {
    MULTICALL: '0xf9a3941009dE9a4769c279F66C46111AcEbdD6b0',
    NFT_LIQUIDITY: '0x542D2817cbE1c09da9C1E5Cc10D8BD66658c1D85',
  },
}
