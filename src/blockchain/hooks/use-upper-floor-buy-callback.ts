import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { utils } from 'ethers'
import { calculateGasMargin, getTxErrorMessage } from 'blockchain/services'
import { useApplication, useWallet } from 'shared/hooks'
import { useNftLiquidityContract } from './use-contract'

export const useUpperFloorBuyCallback = (tokenId: number, price: BigNumber | undefined) => {
  const { address } = useWallet()
  const application = useApplication()
  const contract = useNftLiquidityContract(address || undefined)

  const upperBuy = useCallback(async () => {
    if (!tokenId || isNaN(tokenId) || !price || !address || !contract) {
      return null
    }

    try {
      const estimatedGas = await contract.estimateGas.upperFloorBuy(tokenId, {
        value: utils.parseUnits(price.toString(), 'wei'),
      })

      const tx = await contract.upperFloorBuy(tokenId, {
        value: utils.parseUnits(price.toString(), 'wei'),
        gasLimit: utils.parseUnits(calculateGasMargin(new BigNumber(estimatedGas.toString())).toString(), 'wei'),
      })
      return tx.hash
    } catch (err) {
      console.log('useUpperFloorBuyCallback::err', err)
      const errorMessage = getTxErrorMessage(err)
      application.setError(errorMessage)
    }
    // eslint-disable-next-line
  }, [address, tokenId, price, contract?.address])

  return [upperBuy]
}
