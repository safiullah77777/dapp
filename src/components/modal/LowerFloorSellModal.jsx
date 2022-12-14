import * as React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  DialogActions,
  Button,
} from '@mui/material'
import { config, scaleDown, calculateLowerSellPrice } from 'blockchain'
import { useFetchNftItems, useLowerFloorSellCallback, useSetApprovalForAlCallback } from 'blockchain/hooks'
import { useVisibility, useWallet, useTransaction, useApplication } from 'shared/hooks'
import { VisibilityName } from 'store/visibility'

import './Modal.css'

export default function LowerFloorSellModal(props) {
  const modal = useVisibility(VisibilityName.LOWER_SELL)

  const [selectedNft, setSelectedNft] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { address } = useWallet()
  const { nftInfo, nftLiquidityInfo } = useApplication()
  const transaction = useTransaction()
  const tokensId = useFetchNftItems(nftInfo?.address || undefined, address || undefined)

  const lowerSellPrice = calculateLowerSellPrice(nftLiquidityInfo.balance, nftLiquidityInfo.divideNumber)

  const [setApprovalForAllCallback] = useSetApprovalForAlCallback(
    nftInfo?.address || undefined,
    address || undefined,
    config.ADDRESSES.NFT_LIQUIDITY,
  )
  const [lowerSelCallback] = useLowerFloorSellCallback(selectedNft)

  const handleChangeNft = (event) => {
    setSelectedNft(event.target.value)
  }

  const handleApprovalForAll = async () => {
    setLoading(true)

    const hash = await setApprovalForAllCallback()
    if (hash) {
      await transaction.setTransaction(hash)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  const handleSell = async () => {
    setLoading(true)

    const hash = await lowerSelCallback()
    if (hash) {
      await transaction.setTransaction(hash)
      modal.close()
    } else {
      setLoading(false)
    }
  }

  return (
    <div>
      <Dialog open={!!address && modal.isOpen} onClose={modal.close} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontSize: '2rem', color: 'black' }}>Sell</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '2rem', marginBottom: '1rem' }}>Select an NFT to Sell</DialogContentText>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ fontSize: '1.5rem' }}>
                NFT
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedNft}
                label="Select NFT"
                onChange={handleChangeNft}
                className="select-nft"
                sx={{ fontSize: '1.6rem' }}
                disabled={!nftLiquidityInfo.isApprovedForAll || loading}
              >
                {tokensId.map((tokenId) => (
                  <MenuItem
                    key={tokenId}
                    value={tokenId}
                    className="select-menu-item"
                    sx={{ color: 'black', fontSize: '1.4rem' }}
                  >
                    {nftInfo.name} #{tokenId}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions className="dialog-actions">
          {nftLiquidityInfo.isApprovedForAll === false && (
            <Button
              disabled={loading}
              onClick={handleApprovalForAll}
              className="dialog-btn metamask-btn"
              sx={{ fontSize: '1.5rem' }}
            >
              Approve
            </Button>
          )}
          <Button
            disabled={!selectedNft || !nftLiquidityInfo.isApprovedForAll || loading}
            onClick={handleSell}
            className="dialog-btn metamask-btn"
            sx={{ fontSize: '1.5rem' }}
          >
            {selectedNft ? `Sell (+${scaleDown(lowerSellPrice).toString()} ETH)` : 'Choose an NFT'}
          </Button>
          <Button onClick={modal.close} className="dialog-btn cancel-btn" sx={{ fontSize: '1.5rem' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
