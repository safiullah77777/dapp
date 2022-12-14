import { WALLET_TYPES } from '../../enums'
import { detectWeb3ProviderObject } from '../web3'
import { BaseWalletService, BaseWalletServiceProps } from './base-wallet-service'

export class MetamaskService extends BaseWalletService {
  constructor(props: BaseWalletServiceProps) {
    super(props)

    const { provider, ethereum } = detectWeb3ProviderObject()

    this.ethereum = ethereum
    this.provider = provider
  }

  subscribeToDisconnect = (clearAccount: any, importAccount: any, wallet: any) => {
    this.getDisconnected(clearAccount, importAccount, wallet)
  }

  getWalletType = () => {
    return WALLET_TYPES.METAMASK
  }
}
