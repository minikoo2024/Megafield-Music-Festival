import React from 'react'
import home from '../resources/home/Home.jpg'
import '../style/content.css'

const Home = () => {
  console.log('home page')
  return (
    <div className="content">
      <img className="fullImage" src={home} alt="HOME"></img>
    </div>
  )
}

export default Home
