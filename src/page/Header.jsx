import { AppBar, Typography } from '@mui/material'
import '../style/header.css'

function Header() {
  // 1. Height -> fixed value로  수정 (10px 20px)

  return (
    <div>
      <AppBar className="Header" position="fixed">
        <Typography variant="h3" align="center" nowrap="true">
          Mega Field Festival
        </Typography>
      </AppBar>
    </div>
  )
}

export default Header
