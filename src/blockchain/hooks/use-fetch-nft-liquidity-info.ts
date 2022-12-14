import { useEffect } from 'react'
import { useApplication, useInterval } from 'shared/hooks'
import { executeMulticall, getTxErrorMessage, NFT_LIQUIDITY_ABI } from 'blockchain/services'
import { useMulticallContract } from './use-contract'
import { config } from 'blockchain/configs'

export const useFetchNftLiquidityInfo = () => {
  const application = useApplication()
  const multicall = useMulticallContract()

  const callData = async () => {
    if (!multicall) {
      return
    }

    try {
      const [[nftAddress], [divideNumber], [determinedPercentages]] = await executeMulticall(multicall, [
        {
          address: config.ADDRESSES.NFT_LIQUIDITY,
          abi: NFT_LIQUIDITY_ABI,
          method: 'nftContractAddress',
          params: [],
        },
        {
          address: config.ADDRESSES.NFT_LIQUIDITY,
          abi: NFT_LIQUIDITY_ABI,
          method: 'divideNumber',
          params: [],
        },
        {
          address: config.ADDRESSES.NFT_LIQUIDITY,
          abi: NFT_LIQUIDITY_ABI,
          method: 'determinedPercentages',
          params: [],
        },
      ])

      application.setInfo2({
        nftAddress,
        divideNumber: divideNumber.toNumber(),
        determinedPercentages: determinedPercentages.toNumber(),
      })
    } catch (err) {
      console.log('useFetchNftLiquidityInfo::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
  }

  useEffect(() => {
    callData()
    // eslint-disable-next-line
  }, [multicall?.address])

  useInterval(() => {
    console.debug(`[useFetchNftLiquidityInfo] polling to refresh..`)
    callData()
  }, 15000)
}
