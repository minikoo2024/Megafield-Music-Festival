import React from "react";
import map from "../resources/map/map.jpg";

const Map = () => {
  function zoomIn() {
    // make zoom In function here
  }

  function zoomOut() {
    // same above
  }

  return (
    <div>
      <h2>Map page</h2>
      <img src={map} className="map img" alt="logo" />
    </div>
  );
};

export default Map;
