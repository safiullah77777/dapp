import { configureStore } from '@reduxjs/toolkit'
import { applicationSlice } from './application'
import { transactionSlice } from './transaction'
import { visibilitySlice } from './visibility'
import { walletSlice } from './wallet'

export const store = configureStore({
  reducer: {
    visibility: visibilitySlice.reducer,
    wallet: walletSlice.reducer,
    application: applicationSlice.reducer,
    transaction: transactionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
