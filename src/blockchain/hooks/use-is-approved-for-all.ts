import { useEffect } from 'react'
import { getTxErrorMessage } from 'blockchain/services'
import { useApplication, useInterval } from 'shared/hooks'
import { useNftContract } from './use-contract'

export const useIsApprovedForAll = (
  address: string | undefined,
  owner: string | undefined,
  operator: string | undefined,
) => {
  const application = useApplication()
  const contract = useNftContract(address, undefined, true)

  const callData = async () => {
    if (!owner || !operator || !contract) {
      return
    }

    try {
      const result = await contract.isApprovedForAll(owner, operator)
      application.setInfo4({ isApprovedForAll: result })
    } catch (err) {
      console.log('useIsApprovedForAll::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
  }

  useEffect(() => {
    callData()
    // eslint-disable-next-line
  }, [owner, operator, contract?.address])

  useInterval(() => {
    console.debug(`[useIsApprovedForAll] polling to refresh..`)
    callData()
  }, 15000)
}
