import '../style/content.css'
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material'
import AddCardIcon from '@mui/icons-material/AddCard'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { useState } from 'react'

//https://elements.envato.com/checkout-payment-app-screen-for-food-95Z3GF4

// 1. list items 2-3개 추가하기 (credit card numbers, paypal logo, etc)

//2. --> payment clicked : Order completed 같은 message 전달하는 modal 띄우기
//https://mui.com/material-ui/react-modal/

// 3. payment selected -> style change (selected item -> border color changed -> stylesheet update)

// 4. coupon code text-field에 들어오는 string value setCouponCode -> Typograpy로 registered 된 coupon show
// https://mui.com/material-ui/react-text-field

//4. finger print payment -- > add finger print button below\ (optional assignment)
// https://mui.com/material-ui/react-button/#color

function CheckOut() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [coupon, setCouponCode] = useState('')

  function handleListItemClick(event, index) {
    console.log('handle Click list item')
    setSelectedIndex(index)
  }

  function handleOpenModal() {
    console.log('open modal')
    // implements open modal function
  }

  return (
    <div className="content">
      <Typography variant="h1" align="center">
        Check Out
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="credit card" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary="Add new Credit card" />
        </ListItemButton>
      </List>

      <Button
        variant="contained"
        size="large"
        align="center"
        onClick={handleOpenModal}
      >
        Payment
      </Button>
    </div>
  )
}

export default CheckOut
