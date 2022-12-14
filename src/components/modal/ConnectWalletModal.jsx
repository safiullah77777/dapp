import { useDispatch } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Box, Button } from '@mui/material'
import { fromNetworkIdToName, getCurrentNetworkConfig, MetamaskService, WALLET_TYPES } from 'blockchain'
import { walletSlice } from 'store/wallet'
import { useApplication, useVisibility } from 'shared/hooks'
import { VisibilityName } from 'store/visibility'

import './Modal.css'

export default function ConnectWalletModal(props) {
  const dispatch = useDispatch()
  const application = useApplication()

  const modal = useVisibility(VisibilityName.CONNECT_WALLET)
  const nextModal = useVisibility(props.visibility)

  const networkConfig = getCurrentNetworkConfig()
  const handleConnectMetamask = async () => {
    const wallet = new MetamaskService(networkConfig)
    const address = await wallet.connect(showConnectError, showNetworkError)

    if (!address) {
      return
    }

    const importAccount = (address, wallet, type) => {
      dispatch(
        walletSlice.actions.importAccount({
          address,
          wallet,
          type,
        }),
      )
    }

    wallet.getDisconnected(() => dispatch(walletSlice.actions.clearAccount()), importAccount, wallet)

    importAccount(address, wallet, WALLET_TYPES.METAMASK)

    closeModal()
  }

  const showConnectError = (message) => {
    closeModal()
    application.setError(message || 'Cannot connect to Metamask. Please make sure you have Metamask installed.')
  }

  const showNetworkError = (currentNetworkId) => {
    closeModal()
    application.setError(
      `Metamask should be on ${fromNetworkIdToName(networkConfig.networkId)}. Currently it is on ${fromNetworkIdToName(
        currentNetworkId,
      )} instead.`,
    )
  }

  const closeModal = () => {
    modal.close()

    setTimeout(() => {
      nextModal.open()
    }, 200)
  }

  return (
    <div>
      <Dialog open={modal.isOpen} onClose={closeModal} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontSize: '2rem', color: 'black' }}>Connect Wallet</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Select a wallet to connect
          </DialogContentText>
          <Box sx={{ minWidth: 120 }}>
            <Button onClick={handleConnectMetamask} className="dialog-btn metamask-btn" sx={{ fontSize: '1.5rem' }}>
              Metamask
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
