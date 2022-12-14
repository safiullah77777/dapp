import { useCallback } from 'react'
import { utils } from 'ethers'
import BigNumber from 'bignumber.js'
import { calculateGasMargin, getTxErrorMessage } from 'blockchain/services'
import { useApplication } from 'shared/hooks'
import { useNftContract } from './use-contract'

export const useSetApprovalForAlCallback = (
  address: string | undefined,
  owner: string | undefined,
  operator: string | undefined,
) => {
  const application = useApplication()
  const contract = useNftContract(address, owner)

  const approvalForAll = useCallback(async () => {
    if (!owner || !operator || !contract) {
      return null
    }

    try {
      const estimatedGas = await contract.estimateGas.setApprovalForAll(operator, true)

      const tx = await contract.setApprovalForAll(operator, true, {
        gasLimit: utils.parseUnits(calculateGasMargin(new BigNumber(estimatedGas.toString())).toString(), 'wei'),
      })
      return tx.hash
    } catch (err) {
      console.log('useSetApprovalForAlCallback::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
    // eslint-disable-next-line
  }, [owner, operator, contract?.address])

  return [approvalForAll]
}
