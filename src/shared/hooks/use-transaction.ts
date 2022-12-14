import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { transactionSlice } from 'store/transaction'

export const useTransaction = () => {
  const dispatch = useDispatch()

  const hash = useSelector((state: RootState) => state.transaction.transactionHash)
  const status = useSelector((state: RootState) => state.transaction.status)
  const message = useSelector((state: RootState) => state.transaction.message)

  return {
    hash,
    status,
    message,
    setTransaction: (hash: string) => {
      dispatch(transactionSlice.actions.setTransaction({ hash }))
    },
    notifyCompleted: useCallback(() => {
      dispatch(transactionSlice.actions.transactionCompleted())
    }, [dispatch]),
    notifyFailed: (err: any) => {
      dispatch(transactionSlice.actions.transactionFailed(err))
    },
    reset: useCallback(() => {
      dispatch(transactionSlice.actions.reset())
    }, [dispatch]),
  }
}
