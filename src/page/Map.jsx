import React from "react";
import map from "../resources/map/map.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

const Map = () => {
  const navigate = useNavigate();

  function returnHome() {
    console.log("go back to home page");
    navigate("../"); // -> ./Map

    // ./Profile     ./Artist/Profile
  }

  const imageStyle = {
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={{ align: "center" }}>
      <Button onClick={returnHome}>Return</Button>
      <Typography variant="h1" align="center" gutterBottom>
        Festival Map
      </Typography>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={100}
      >
        <TransformComponent>
          <img src={map} style={imageStyle} className="map img" alt="logo" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
