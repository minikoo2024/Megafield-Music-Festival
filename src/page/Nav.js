import { Link } from 'react-router-dom'
import '../style/Nav.css'
import { HomeIcon } from '@mui/icons-material'

function Nav() {
  return (
    <div className="navbar">
      <Link className="navbarMenu" to={'/'}>
        <HomeIcon sx={{ mr: 2 }} />
      </Link>
      <Link className="navbarMenu" to={'/Map'}>
        Map
      </Link>
      <Link className="navbarMenu" to={'/Artist'}>
        Artist
      </Link>
      <Link className="navbarMenu" to={'/FoodMenu'}>
        FoodMenu
      </Link>
    </div>
  )
}

export default Nav
