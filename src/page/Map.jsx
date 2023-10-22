import React from 'react'
import map from '../resources/map/Map.jpg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import '../style/content.css'
import { Container, CssBaseline } from '@mui/material'

const Map = () => {
  return (
    <div className="content">
      <CssBaseline />
      <Container maxWidth="lg">
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
      </Container>
    </div>
  )
}

export default Map
