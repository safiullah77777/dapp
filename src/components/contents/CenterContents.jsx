import { useState } from 'react'
import { Paper, Box, Grid, Snackbar } from '@mui/material'
import Alert from 'components/alert/Alert'
import ConnectWalletModal from 'components/modal/ConnectWalletModal'
import LowerFloorSellModal from 'components/modal/LowerFloorSellModal'
import UpperFloorBuyModal from 'components/modal/UpperFloorBuyModal'
import TransactionModal from 'components/modal/TransactionModal'
import { useFetchETHBalance, useFetchNftInfo, useFetchNftLiquidityInfo, useIsApprovedForAll } from 'blockchain/hooks'
import { calculateLowerSellPrice, calculateUpperBuyPrice, config, scaleDown } from 'blockchain'
import { useApplication, useTransaction, useVisibility, useWallet } from 'shared/hooks'
import { VisibilityName } from 'store/visibility'

import { styled } from '@mui/material/styles'
import './CenterContents.css'

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: 'none',
  textAlign: 'left',
  fontSize: '2rem',
  color: 'white',
  //   color: theme.palette.text.info,
}))

function CenterContents() {
  const connectWalletModal = useVisibility(VisibilityName.CONNECT_WALLET)
  const lowerFloorSellModal = useVisibility(VisibilityName.LOWER_SELL)
  const upperFloorBuyModal = useVisibility(VisibilityName.UPPER_BUY)
  const transactionModal = useVisibility(VisibilityName.TRANSACTION)

  const [isSell, setIsSell] = useState(false)

  const { address } = useWallet()
  const { nftInfo, nftLiquidityInfo, error: appError, ...application } = useApplication()
  const { hash } = useTransaction()

  const lowerSellPrice = calculateLowerSellPrice(nftLiquidityInfo.balance, nftLiquidityInfo.divideNumber)
  const upperBuyPrice = calculateUpperBuyPrice(
    lowerSellPrice,
    nftLiquidityInfo.divideNumber,
    nftLiquidityInfo.determinedPercentages,
  )

  // polling refresh
  useFetchETHBalance(config.ADDRESSES.NFT_LIQUIDITY)
  useFetchNftLiquidityInfo()
  useFetchNftInfo(nftInfo?.address || undefined)
  useIsApprovedForAll(nftInfo?.address || undefined, address || undefined, config.ADDRESSES.NFT_LIQUIDITY)

  const handleClick = (isSell) => {
    setIsSell(isSell)

    if (!address) {
      connectWalletModal.open()
      return
    }

    if (isSell) {
      lowerFloorSellModal.open()
      return
    }

    upperFloorBuyModal.open()
  }

  if (hash && !transactionModal.isOpen) {
    setTimeout(() => {
      transactionModal.open()
    }, 200)
  }

  if (appError.message && appError.message.length) {
    setTimeout(() => {
      application.setError(undefined)
    }, 3000)
  }

  return (
    <div className="container">
      <div>
        <h1 className="center-heading">Isekai Supply: {nftInfo?.totalSupply || '--'}</h1>
      </div>
      <div className="center-content">
        <div className="center-content-item">
          <Box sx={{ width: '100%' }}>
            <Grid className="center-content-item-grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>Liquidity Protocol Balance</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{scaleDown(nftLiquidityInfo.balance).toString()} ETH</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Upper Floor Buy Price</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{upperBuyPrice ? scaleDown(upperBuyPrice).toString() : '--'}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Number Of NFT Available</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{nftLiquidityInfo?.totalNFTsAvailable || '--'}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Premium Percentage</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  {nftLiquidityInfo && nftLiquidityInfo.determinedPercentages
                    ? `${nftLiquidityInfo.determinedPercentages}%`
                    : '--'}
                </Item>
              </Grid>
            </Grid>
          </Box>
          <button className="btn" onClick={() => handleClick(false)}>
            Execute Upper Buy
          </button>
        </div>
        <div className="center-content-item">
          <Box sx={{ width: '100%' }}>
            <Grid className="center-content-item-grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>Lower Floor Sell Prices</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{lowerSellPrice ? scaleDown(lowerSellPrice).toString() : '--'}</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Liquidity Available</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{scaleDown(nftLiquidityInfo.balance).toString()} ETH</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Divider</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>{nftLiquidityInfo?.divideNumber || '--'}</Item>
              </Grid>
            </Grid>
          </Box>
          <button className="btn" onClick={() => handleClick(true)}>
            Execute Lower Sell
          </button>{' '}
        </div>
      </div>
      <div className="center-bottom">
        <h1 className="center-bottom-heading">How NFT LP works</h1>
        <div className="row">
          <div className="column">
            <h2>
              {nftLiquidityInfo && nftLiquidityInfo.determinedPercentages
                ? `${nftLiquidityInfo.determinedPercentages}%`
                : '--'}
            </h2>
            <p>Premium Percentage</p>
          </div>
          <div className="column">
            <h2>{nftLiquidityInfo?.divideNumber || '--'}</h2>
            <p>Divider</p>
          </div>
          <div className="column" style={{ border: 'none' }}>
            <h2>{scaleDown(nftLiquidityInfo.balance).toString()} ETH</h2>
            <p>Starting Balance</p>
          </div>
        </div>
      </div>

      <ConnectWalletModal visibility={isSell ? VisibilityName.LOWER_SELL : VisibilityName.UPPER_BUY} />
      <LowerFloorSellModal />
      <UpperFloorBuyModal />
      <TransactionModal />

      <Snackbar open={!!appError.message} autoHideDuration={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {appError.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CenterContents
