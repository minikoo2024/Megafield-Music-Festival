import { AppBar, Typography } from '@mui/material'

function Header() {
  // 1. Height -> fixed value로  수정 (10px 20px)

  return (
    <div className="Header">
      <AppBar
        style={{ width: '100vw', height: '6vh', backgroundColor: 'blue' }}
        position="fixed"
      >
        <Typography variant="h3" color="white" align="center" nowrap>
          Mega Field Festival
        </Typography>
      </AppBar>
    </div>
  )
}

export default Header
