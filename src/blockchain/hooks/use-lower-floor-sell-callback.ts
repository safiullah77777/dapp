import { useCallback } from 'react'
import { utils } from 'ethers'
import BigNumber from 'bignumber.js'
import { calculateGasMargin, getTxErrorMessage } from 'blockchain/services'
import { useApplication, useWallet } from 'shared/hooks'
import { useNftLiquidityContract } from './use-contract'

export const useLowerFloorSellCallback = (tokenId: number | undefined) => {
  const { address } = useWallet()
  const application = useApplication()
  const contract = useNftLiquidityContract(address || undefined)

  const lowerSell = useCallback(async () => {
    if (!tokenId || !address || !contract) {
      return null
    }

    try {
      const estimatedGas = await contract.estimateGas.lowerFloorSell(tokenId)

      const tx = await contract.lowerFloorSell(tokenId, {
        gasLimit: utils.parseUnits(calculateGasMargin(new BigNumber(estimatedGas.toString())).toString(), 'wei'),
      })
      return tx.hash
    } catch (err) {
      console.log('useLowerFloorSellCallback::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
    // eslint-disable-next-line
  }, [tokenId, address, contract?.address])

  return [lowerSell]
}
