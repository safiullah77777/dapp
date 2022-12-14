import { useMemo } from 'react'
import { Contract } from 'ethers'
import { config } from '../configs'
import { getContract, MULTICALL_ABI, NFT_ABI, NFT_LIQUIDITY_ABI } from '../services'
import { useLibrary } from './use-library'

// returns null on errors
export function useContract(
  address: string | undefined,
  ABI: any,
  signer?: string,
  isStaticCall?: boolean,
): Contract | null {
  const library = useLibrary(isStaticCall)
  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, signer)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, signer, library])
}

export function useNftContract(address: string | undefined, signer?: string, isStaticCall?: boolean): Contract | null {
  return useContract(address, NFT_ABI, signer, isStaticCall)
}

export function useNftLiquidityContract(signer?: string, isStaticCall?: boolean): Contract | null {
  return useContract(config.ADDRESSES.NFT_LIQUIDITY, NFT_LIQUIDITY_ABI, signer, isStaticCall)
}

export function useMulticallContract(): Contract | null {
  return useContract(config.ADDRESSES.MULTICALL, MULTICALL_ABI, undefined, true)
}
