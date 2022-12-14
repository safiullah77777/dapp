import { useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { getTxErrorMessage } from 'blockchain/services'
import { useApplication, useInterval } from 'shared/hooks'
import { useLibrary } from './use-library'

export const useFetchETHBalance = (address: string) => {
  const application = useApplication()
  const library = useLibrary(true)

  const callData = async () => {
    if (!address) {
      return
    }

    try {
      const result = await library.getBalance(address)
      application.setInfo3({ balance: new BigNumber(result.toString()) })
    } catch (err) {
      console.log('useFetchETHBalance::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
  }

  useEffect(() => {
    callData()
    // eslint-disable-next-line
  }, [address])

  useInterval(() => {
    console.debug(`[useFetchETHBalance] polling to refresh..`)
    callData()
  }, 15000)
}
