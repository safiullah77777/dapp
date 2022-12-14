import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BigNumber from 'bignumber.js'
import { RootState } from 'store'
import { applicationSlice } from 'store/application'

export const useApplication = () => {
  const nftInfo = useSelector((state: RootState) => state.application.nft)
  const nftLiquidityInfo = useSelector((state: RootState) => state.application.nftLiquidity)
  const error = useSelector((state: RootState) => state.application.error)

  const dispatch = useDispatch()

  return {
    nftInfo,
    nftLiquidityInfo,
    error,
    setInfo1: (info: { name: string; symbol: string; totalSupply: number; totalNFTsAvailable: number }) => {
      dispatch(applicationSlice.actions.setInfo1(info))
    },
    setInfo2: (info: { nftAddress: string; divideNumber: number; determinedPercentages: number }) => {
      dispatch(applicationSlice.actions.setInfo2(info))
    },
    setInfo3: (info: { balance: BigNumber }) => {
      dispatch(applicationSlice.actions.setInfo3(info))
    },
    setInfo4: (info: { isApprovedForAll?: boolean }) => {
      dispatch(applicationSlice.actions.setInfo4(info))
    },
    setError: (message?: string) => {
      dispatch(applicationSlice.actions.setError({ message }))
    },
    clear: useCallback(() => {
      dispatch(applicationSlice.actions.clear())
    }, [dispatch]),
  }
}
