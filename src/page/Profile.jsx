import React from 'react'
import Boramiyu from '../resources/artists/Boramiyu.jpg'
import { Typography, CssBaseline, Box, Container } from '@mui/material'
import '../style/content.css'

function Profile() {
  // Artist's Music, Album, Youtube Links?

  return (
    <div className="content">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '65vw' }}>
          <Typography variant="h3" color="black" align="left">
            Boramiyu (보라미유)
          </Typography>
          <img src={Boramiyu} className="imageSrc" alt="logo" />
          <Typography variant="body1" align="left" gutterBottom>
            'Boramiyu is a South Korean singer and YouTuber under Shofar
            Entertainment. She debuted on November 21, 2018 with her first
            single I Wanna Hate You'
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Profile
