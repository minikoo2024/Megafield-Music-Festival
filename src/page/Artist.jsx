import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import timetable from "../resources/artists/Artist Lineup.jpg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell'

function createData(
  name: String,
  time: String,
) {
  return { name, time };
}

const rows1 = [
  createData('Boramiyu', "1200-1230"),
  createData('Isaac Hong', "1245-1315"),
  createData('Lee Solomon', "1330-1410"),
  createData('Ha Hyun Sang', "1425-1515"),
  createData('Ha Dong Qn', "1530-1620"),
  createData('Park Won', "1635-1725"),
  createData('Roy Kim', "1740-1830"),
  createData('BOL4', "1845-1945"),
  createData('HoooW', "2000-2100"),
];

const rows2 = [
  createData('J.UNA', "1200-1230"),
  createData('Lee Byeong Chan', "1245-1315"),
  createData('The Solutions', "1330-1410"),
  createData('I', "1425-1515"),
  createData('Lee Mujin', "1635-1725"),
  createData('John Park', "1740-1830"),
  createData('Kim Feel', "1845-1945"),
  createData('Jukjae', "2000-2100"),
  createData('Nell', "2000-2100"),
];

const Artist = () => {
  function moveToProfile() {
    // please implement function for onClick Event of TimeTable to move to Profile Page
    // use navigate() , check the Survey.jsx code, please.
  }
  const navigate = useNavigate();
  // if you can make festival Timetable followed by this https://mui.com/material-ui/react-table/
  // then don't put the image below the <h2></h2> tag, instead implement the timetable, and add onClickEvent on each row
  // You also can set the style (color, font, width, height size, etc) like the Timetable image.
  function handleClickBoramiyu() {
    console.log("artist page handle click Boramiyu function called");
    navigate("./Profile");
  }
  return (
    <div
    style={{
      width: "100%",
      height: "1080px",
      
    }}>
      
      <h2>Artist TimeTable</h2>
      {/* <img> </img> */}
      {/* or  <table></table> */}
      <table>
        <img src={timetable} className="map img" alt="logo" />
      </table>
      <Button
        variant="primary"
        size="lg"
        type="button"
        onClick={handleClickBoramiyu}
        style={{ margin: "10px" }}
        
      >
        Boramiyu
      </Button>
      <h2>Saturday</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Time</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h2>Sunday</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Time</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Artist;
