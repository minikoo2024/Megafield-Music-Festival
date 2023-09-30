import React from 'react'
import map from '../resources/map/Map.jpg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Typography from '@mui/material/Typography'
import '../style/content.css'

const Map = () => {
  const imageStyle = {
    width: '100%',
    height: '100%',
    margin: 10,
    top: 50,
    align: 'center',
    position: 'relative',
  }

  return (
    <div className="content">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={100}
        custom
      >
        <TransformComponent>
          <img src={map} style={imageStyle} className="mapImage" alt="logo" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default Map
