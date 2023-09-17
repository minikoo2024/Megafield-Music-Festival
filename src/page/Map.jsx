import React from "react";
import map from "../resources/map/map.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Typography from "@mui/material/Typography";

const Map = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <Typography variant="h1" align="center" gutterBottom>
        Festival Map
      </Typography>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={100}
      >
        <TransformComponent>
          <img src={map} className="map img" alt="logo" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
