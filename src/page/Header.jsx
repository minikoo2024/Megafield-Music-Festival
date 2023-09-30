import { AppBar, Toolbar, Typography } from '@mui/material'

function Header() {
  return (
    <div className="Header">
      <AppBar position="relative">
        <Typography variant="h6" color="inherit" align="center" nowrap>
          Mega Field Festival
        </Typography>
      </AppBar>
    </div>
  )
}

export default Header
