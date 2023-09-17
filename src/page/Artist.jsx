import React, { useState } from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import home from "../resources/home/Home.jpg";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name1, time1, name2, time2) {
  return { name1, time1, name2, time2 };
}

const rows1 = [
  createData("Boramiyu", "12:00-12:30", "J.UNA", "12:00-12:30"),
  createData("Isaac Hong", "12:45-13:15", "Lee Byeong Chan", "12:45-13:15"),
  createData("Lee Solomon", "13:30-14:10", "The Solutions", "13:30-14:10"),
  createData("Ha Hyun Sang", "14:25-15:15", "I", "14:25-15:15"),
  createData("Ha Dong Qn", "15:30-16:20", "Lee Mujin", "15:30-16:20"),
  createData("Park Won", "16:35-17:25", "John Park", "16:35-17:25"),
  createData("Roy Kim", "17:40-18:30", "Kim Feel", "17:40-18:30"),
  createData("BOL4", "18:45-19:45", "Jukjae", "18:45-19:45"),
  createData("HoooW", "20:00-21:00", "Nell", "20:00-21:00"),
];

const TopPictures = () => {
  const imageStyle = {
    height: "20vh",
    width: "20vw",
    align: "center",
  };
  return (
    <div>
      <img src={home} style={imageStyle} alt="home" />;
    </div>
  );
};

const Artist = () => {
  const navigate = useNavigate();
  // if you can make festival Timetable followed by this https://mui.com/material-ui/react-table/
  // then don't put the image below the <h2></h2> tag, instead implement the timetable, and add onClickEvent on each row
  // You also can set the style (color, font, width, height size, etc) like the Timetable image.
  function moveToProfile() {
    console.log("move to profile page function called");
    navigate("./Profile");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "1080px",
        alignContent: "center",
      }}
    >
      <TopPictures />
      <Typography variant="h1" align="center" gutterBottom>
        Music Festival
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Time Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Artist</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
              <StyledTableCell align="left">Artist</StyledTableCell>
              <StyledTableCell align="right">Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow key={row.name} sx={{}}>
                <TableCell
                  component="th"
                  scope="row"
                  padding="none"
                  align="left"
                  onClick={moveToProfile}
                >
                  {row.name1}
                </TableCell>
                <TableCell align="right">{row.time1}</TableCell>
                <TableCell align="left">{row.name2}</TableCell>
                <TableCell align="right">{row.time2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Artist;
