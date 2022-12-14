import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransactionStatusEnum } from 'blockchain/enums'
import { getTxErrorMessage } from 'blockchain/services'

export type TransactionState = {
  transactionHash?: string
  status?: TransactionStatusEnum
  message?: string
}

const initialState: TransactionState = {
  transactionHash: undefined,
  status: undefined,
  message: undefined,
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action: PayloadAction<{ hash: string }>) => {
      state.transactionHash = action.payload.hash
      state.status = TransactionStatusEnum.PENDING
    },
    transactionCompleted: (state) => {
      state.status = TransactionStatusEnum.SUCCESS
      state.message = ''
    },
    transactionFailed: (state, action: PayloadAction<any>) => {
      state.status = TransactionStatusEnum.ERROR
      state.message = getTxErrorMessage(action.payload)
    },
    reset: () => initialState,
  },
})
