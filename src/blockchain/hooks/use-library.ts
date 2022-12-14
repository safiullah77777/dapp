import { useMemo } from 'react'
import { detectWeb3ProviderObject } from '../services'

export const useLibrary = (isDefault: boolean = false) => {
  const { provider, defaultProvider } = detectWeb3ProviderObject()
  const library = useMemo(() => (isDefault ? defaultProvider : provider), [isDefault, provider, defaultProvider])
  return library
}
