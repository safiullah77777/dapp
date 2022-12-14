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
import BigNumber from 'bignumber.js'
import { useFetchNftItems, useUpperFloorBuyCallback } from 'blockchain/hooks'
import { useVisibility, useTransaction, useApplication, useWallet } from 'shared/hooks'
import { VisibilityName } from 'store/visibility'
import { calculateLowerSellPrice, calculateUpperBuyPrice, config, scaleDown } from 'blockchain'

import './Modal.css'

export default function UpperFloorBuyModal(props) {
  const modal = useVisibility(VisibilityName.UPPER_BUY)

  const [selectedNft, setSelectedNft] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { address } = useWallet()
  const { nftInfo, nftLiquidityInfo } = useApplication()
  const transaction = useTransaction()
  const tokensId = useFetchNftItems(nftInfo?.address || undefined, config.ADDRESSES.NFT_LIQUIDITY)

  const lowerSellPrice = calculateLowerSellPrice(nftLiquidityInfo.balance, nftLiquidityInfo.divideNumber)
  const upperBuyPrice = calculateUpperBuyPrice(
    lowerSellPrice,
    nftLiquidityInfo.divideNumber,
    nftLiquidityInfo.determinedPercentages,
  )

  const [upperBuyCallback] = useUpperFloorBuyCallback(
    parseInt(selectedNft, 10),
    upperBuyPrice?.decimalPlaces(0, BigNumber.ROUND_UP),
  )

  const handleChangeNft = (event) => {
    setSelectedNft(event.target.value)
  }

  const handleBuy = async () => {
    setLoading(true)

    const hash = await upperBuyCallback()
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
          <DialogContentText sx={{ fontSize: '2rem', marginBottom: '1rem' }}>Select an NFT to Buy</DialogContentText>
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
          <Button
            disabled={!selectedNft || loading}
            onClick={handleBuy}
            className="dialog-btn metamask-btn"
            sx={{ fontSize: '1.5rem' }}
          >
            {selectedNft ? `Buy (-${scaleDown(upperBuyPrice).toString()} ETH)` : 'Choose an NFT'}
          </Button>
          <Button onClick={modal.close} className="dialog-btn cancel-btn" sx={{ fontSize: '1.5rem' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
