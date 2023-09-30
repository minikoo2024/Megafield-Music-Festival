import React from 'react'
import Boramiyu from '../resources/artists/Boramiyu.jpg'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../style/content.css'

function Profile() {
  // Artist's Music, Album, Youtube Links?

  return (
    <div className="content">
      <Typography variant="h3" color="black" align="left">
        Boramiyu
      </Typography>
      <img src={Boramiyu} className="imageSrc" alt="logo" />
      <text>
        'Boramiyu is a South Korean singer and YouTuber under Shofar
        Entertainment. She debuted on November 21, 2018 with her first single I
        Wanna Hate You'
      </text>
    </div>
  )
}

export default Profile
