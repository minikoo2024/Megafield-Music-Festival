import React from "react";
import map from "../resources/map/map.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
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
