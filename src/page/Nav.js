import { Link } from 'react-router-dom'
import '../style/Nav.css'
import { Home, Map, AccessAlarm, Fastfood, Feed } from '@mui/icons-material'

function Nav() {
  return (
    <div className="navbar">
      <Link className="navbarMenu" to={'/'}>
        <Home sx={{ mr: 3 }} />
      </Link>
      <Link className="navbarMenu" to={'/Map'}>
        <Map sx={{ mr: 3 }} />
      </Link>
      <Link className="navbarMenu" to={'/Artist'}>
        <AccessAlarm sx={{ mr: 3 }} />
      </Link>
      <Link className="navbarMenu" to={'/FoodMenu'}>
        <Fastfood sx={{ mr: 3 }} />
      </Link>
      <Link className="navbarMenu" to={'/Survey'}>
        <Feed sx={{ mr: 3 }} />
      </Link>
    </div>
  )
}

export default Nav
