import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WALLET_TYPES } from 'blockchain/enums'
import { BaseWalletService } from 'blockchain/services'

export type WalletState = {
  address: string | null
  type: WALLET_TYPES | null
  wallet: BaseWalletService | null
}

const initialState: WalletState = {
  address: null,
  type: null,
  wallet: null,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    importAccount: (
      state,
      action: PayloadAction<{ address: string; wallet: BaseWalletService; type: WALLET_TYPES }>,
    ) => ({
      ...state,
      address: action.payload.address,
      wallet: action.payload.wallet,
      type: action.payload.type,
    }),
    clearAccount: () => initialState,
  },
})
