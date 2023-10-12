import React from 'react'
import map from '../resources/map/Map.jpg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import '../style/content.css'

const Map = () => {
  return (
    <div className="content">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={100}
        custom
      >
        <TransformComponent>
          <img src={map} className="mapImage" alt="logo" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default Map
