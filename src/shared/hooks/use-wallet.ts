import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const useWallet = () => {
  const getWallet = (state: RootState) => state.wallet
  return useSelector(getWallet)
}
