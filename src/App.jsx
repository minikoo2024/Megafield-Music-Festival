import './style/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Map from './page/Map.jsx'
import Artist from './page/Artist'
import Survey from './page/Survey'
import FoodSubMenu from './page/FoodSubMenu'
import Profile from './page/Profile'
import { PC, Mobile } from './module/responseWebModule'
import FoodMenu from './page/FoodMenu'
import Header from './page/Header'
import Nav from './page/Nav'
import CheckOut from './page/CheckOut'

function App() {
  return (
    <>
      <Mobile>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Artist/Profile" element={<Profile />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/FoodMenu/FoodSubMenu" element={<FoodSubMenu />} />
          <Route path="/FoodMenu/FoodSubMenu/CheckOut" element={<CheckOut />} />
        </Routes>
        <Nav />
      </Mobile>
      ../../../
      <PC>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Artist/Profile" element={<Profile />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/FoodMenu/FoodSubMenu" element={<FoodSubMenu />} />
          <Route path="/FoodMenu/FoodSubMenu/CheckOut" element={<CheckOut />} />
        </Routes>
        <Nav />
      </PC>
    </>
  )
}

export default App
