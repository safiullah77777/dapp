import { useEffect } from 'react'
import { Dialog, DialogContent, DialogContentText, Box, CircularProgress, Link, Button } from '@mui/material'
import { useTransaction, useVisibility } from 'shared/hooks'
import { config, TransactionStatusEnum } from 'blockchain'
import { useLibrary } from 'blockchain/hooks'

import './Modal.css'
import { VisibilityName } from 'store/visibility'

export default function TransactionModal() {
  const modal = useVisibility(VisibilityName.TRANSACTION)

  const library = useLibrary()
  const { hash, status, message, ...transaction } = useTransaction()

  useEffect(() => {
    const processTransaction = async () => {
      try {
        if (!hash) {
          return
        }

        const transactionReceipt = await library.waitForTransaction(hash, 2)
        if (transactionReceipt.status === 1) {
          await transaction.notifyCompleted()
        } else {
          await transaction.notifyFailed(new Error('Oops. Something went wrong!'))
        }
      } catch (err) {
        console.log('processTransaction::err', err)
        await transaction.notifyFailed(err)
      }
    }

    processTransaction()
    // eslint-disable-next-line
  }, [hash])

  const handleClose = () => {
    modal.close()
    transaction.reset()
  }

  return (
    <div>
      <Dialog open={modal.isOpen} onClose={handleClose} fullWidth maxWidth="xs">
        {/* <DialogTitle sx={{ fontSize: '2rem', color: 'black' }}>Connect Wallet</DialogTitle> */}
        <DialogContent className="tx">
          {status === TransactionStatusEnum.SUCCESS && (
            <DialogContentText className="tx-status" sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Transaction Completed!
            </DialogContentText>
          )}
          {status === TransactionStatusEnum.ERROR && (
            <DialogContentText className="tx-status" sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Transaction Failed!
            </DialogContentText>
          )}
          {status === TransactionStatusEnum.PENDING && (
            <Box className="tx-content">
              <DialogContentText className="tx-status" sx={{ fontSize: '2rem', marginBottom: '1rem' }}>
                Transaction are submitting...
              </DialogContentText>
              <CircularProgress className="tx-loading" color="primary" />
            </Box>
          )}
          <Link href={`${config.ETHERSCAN_URL}/tx/${hash}`} target="_blank">
            View on Etherscan
          </Link>
          {status !== TransactionStatusEnum.PENDING && (
            <Box className="tx-actions" sx={{ minWidth: 120 }}>
              <Button onClick={handleClose} className="dialog-btn" sx={{ fontSize: '1.5rem' }}>
                Close
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
