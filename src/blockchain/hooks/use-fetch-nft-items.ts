import { useEffect, useMemo, useState } from 'react'
import { executeMulticall, getTxErrorMessage, NFT_ABI } from 'blockchain/services'
import { useApplication } from 'shared/hooks'
import { useMulticallContract } from './use-contract'

export const useFetchNftItems = (address: string | undefined, owner: string | undefined) => {
  const application = useApplication()
  const multicall = useMulticallContract()

  const [tokensId, setTokensId] = useState<number[]>([])

  useEffect(() => {
    const callData = async () => {
      if (!address || !owner || !multicall) {
        return
      }

      try {
        const [[balanceOf]] = await executeMulticall(multicall, [
          {
            address,
            abi: NFT_ABI,
            method: 'balanceOf',
            params: [owner],
          },
        ])

        const results = await executeMulticall(
          multicall,
          Array.from(Array(balanceOf.toNumber()).keys()).map((idx) => {
            return {
              address,
              abi: NFT_ABI,
              method: 'tokenOfOwnerByIndex',
              params: [owner, idx],
            }
          }),
        )

        setTokensId(results.map((r) => r[0].toNumber()))
      } catch (err) {
        console.log('useFetchNftItems::err', err)
        const errorMessage = getTxErrorMessage(err)
        application.setError(errorMessage)
      }
    }

    callData()
    // eslint-disable-next-line
  }, [address, owner, multicall?.address])

  return useMemo(() => tokensId, [tokensId])
}
