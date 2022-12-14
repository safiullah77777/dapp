import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum VisibilityName {
  CONNECT_WALLET = 'connectWallet',
  LOWER_SELL = 'lowerSell',
  UPPER_BUY = 'upperBuy',
  TRANSACTION = 'transaction',
}

export type VisibilityState = {
  [VisibilityName.CONNECT_WALLET]: boolean
  [VisibilityName.LOWER_SELL]: boolean
  [VisibilityName.UPPER_BUY]: boolean
  [VisibilityName.TRANSACTION]: boolean
}

const initialState: Record<VisibilityName, boolean> = {
  [VisibilityName.CONNECT_WALLET]: false,
  [VisibilityName.LOWER_SELL]: false,
  [VisibilityName.UPPER_BUY]: false,
  [VisibilityName.TRANSACTION]: false,
}

export const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<VisibilityName>) => ({
      ...state,
      [action.payload]: true,
    }),
    close: (state, action: PayloadAction<VisibilityName>) => ({
      ...state,
      [action.payload]: false,
    }),
    closeAll: () => initialState,
    toggle: (state, action: PayloadAction<VisibilityName>) => ({
      ...state,
      [action.payload]: !state[action.payload],
    }),
    set: (state, action: PayloadAction<{ name: VisibilityName; state: boolean }>) => ({
      ...state,
      [action.payload.name]: action.payload.state,
    }),
  },
})
