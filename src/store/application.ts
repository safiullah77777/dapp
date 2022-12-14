import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'

export type ApplicationState = {
  nft: {
    address: string | null

    name: string | null

    symbol: string | null

    totalSupply?: number
  }

  nftLiquidity: {
    balance?: BigNumber

    isApprovedForAll?: boolean

    totalNFTsAvailable?: number

    divideNumber?: number

    determinedPercentages?: number
  }

  error: {
    message?: string
  }
}

const initialState: ApplicationState = {
  nft: {
    address: null,
    name: null,
    symbol: null,
  },
  nftLiquidity: {},
  error: {},
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setInfo1: (
      state,
      action: PayloadAction<{ name: string; symbol: string; totalSupply: number; totalNFTsAvailable: number }>,
    ) => ({
      ...state,
      nft: {
        ...state.nft,
        name: action.payload.name,
        symbol: action.payload.symbol,
        totalSupply: action.payload.totalSupply,
      },
      nftLiquidity: {
        ...state.nftLiquidity,
        totalNFTsAvailable: action.payload.totalNFTsAvailable,
      },
    }),
    setInfo2: (
      state,
      action: PayloadAction<{ nftAddress: string; divideNumber: number; determinedPercentages: number }>,
    ) => ({
      ...state,
      nft: {
        ...state.nft,
        address: action.payload.nftAddress,
      },
      nftLiquidity: {
        ...state.nftLiquidity,
        divideNumber: action.payload.divideNumber,
        determinedPercentages: action.payload.determinedPercentages,
      },
    }),
    setInfo3: (state, action: PayloadAction<{ balance: BigNumber }>) => ({
      ...state,
      nftLiquidity: {
        ...state.nftLiquidity,
        balance: action.payload.balance,
      },
    }),
    setInfo4: (state, action: PayloadAction<{ isApprovedForAll?: boolean }>) => ({
      ...state,
      nftLiquidity: {
        ...state.nftLiquidity,
        isApprovedForAll: action.payload.isApprovedForAll,
      },
    }),
    setError: (state, action: PayloadAction<{ message?: string }>) => ({
      ...state,
      error: {
        message: action.payload.message,
      },
    }),
    clear: () => initialState,
  },
})
