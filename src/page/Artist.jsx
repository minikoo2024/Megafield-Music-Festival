import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import timetable from "../resources/artists/Artist Lineup.jpg";

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
    </div>
  );
};

export default Artist;
