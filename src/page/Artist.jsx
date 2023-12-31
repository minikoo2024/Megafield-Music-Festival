import React from 'react'
import { useNavigate } from 'react-router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import '../style/content.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

function createData(name1, time1, name2, time2) {
  return { name1, time1, name2, time2 }
}

const rows1 = [
  createData('Boramiyu', '12:00-12:30', 'J.UNA', '12:00-12:30'),
  createData('Isaac Hong', '12:45-13:15', 'Lee Byeong Chan', '12:45-13:15'),
  createData('Lee Solomon', '13:30-14:10', 'The Solutions', '13:30-14:10'),
  createData('Ha Hyun Sang', '14:25-15:15', 'I', '14:25-15:15'),
  createData('Ha Dong Qn', '15:30-16:20', 'Lee Mujin', '15:30-16:20'),
  createData('Park Won', '16:35-17:25', 'John Park', '16:35-17:25'),
  createData('Roy Kim', '17:40-18:30', 'Kim Feel', '17:40-18:30'),
  createData('BOL4', '18:45-19:45', 'Jukjae', '18:45-19:45'),
  createData('HoooW', '20:00-21:00', 'Nell', '20:00-21:00'),
]

const Artist = () => {
  const navigate = useNavigate()

  const TableTitle = () => {
    return (
      <>
        <StyledTableCell padding="normal" align="left">
          Artist
        </StyledTableCell>
        <StyledTableCell padding="normal" align="right">
          Time
        </StyledTableCell>
      </>
    )
  }

  const TableArtistName = (props) => {
    return (
      <TableCell
        component="th"
        padding="normal"
        align="left"
        onClick={moveToProfile}
      >
        {props.name}
      </TableCell>
    )
  }

  const TableArtistTime = (props) => {
    return (
      <TableCell component="td" padding="normal" align="right">
        {props.time}
      </TableCell>
    )
  }

  function moveToProfile() {
    console.log('move to profile page function called')
    navigate('./Profile')
  }

  return (
    <div className="content">
      <Typography variant="h2" align="center" gutterBottom>
        Time Table
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: '40vw' }}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableTitle />
              <TableTitle />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow key={row.name1} sx={{}}>
                <TableArtistName name={row.name1} />
                <TableArtistTime time={row.time1} />
                <TableArtistName name={row.name2} />
                <TableArtistTime time={row.time2} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Artist
