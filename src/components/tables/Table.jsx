import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { upperBuy, lowerSell } from '../tableData'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D1AB4D',
    color: theme.palette.common.white,
    fontSize: '1.8rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.4rem',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFF9EA',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(upperBuy, lowerSell) {
  return { upperBuy, lowerSell }
}
const rows = []
const handleTableData = () => {
  for (let i = 0; i < upperBuy.length; i++) {
    const cellData = createData(upperBuy[i], lowerSell[i])
    rows.push(cellData)
  }
}

handleTableData()

export default function CustomizedTable() {
  const [rowData] = React.useState(rows)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Upper Buy</StyledTableCell>
            <StyledTableCell align="center">Lower Sell</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row) => (
            <StyledTableRow key={row.upperBuy}>
              <StyledTableCell align="center">{row.upperBuy}</StyledTableCell>
              <StyledTableCell align="center">{row.lowerSell}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
