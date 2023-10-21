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
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { useEffect} from 'react'
import {useNavigate} from 'react-router'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

//https://elements.envato.com/checkout-payment-app-screen-for-food-95Z3GF4

// 1. list items 2-3개 추가하기 (credit card numbers, paypal logo, etc)

//2. --> payment clicked : Order completed 같은 message 전달하는 modal 띄우기
//https://mui.com/material-ui/react-modal/

// 3. payment selected -> style change (selected item -> border color changed -> stylesheet update)

// 4. coupon code text-field에 들어오는 string value setCouponCode -> Typograpy로 registered 된 coupon show
// https://mui.com/material-ui/react-text-field

//4. finger print payment -- > add finger print button below\ (optional assignment)
// https://mui.com/material-ui/react-button/#color

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function calculatePrice(foodPrice, quantity) {
  console.log('foodPrice : ', foodPrice, ' food Quantity: ', quantity)
  return foodPrice * quantity
}

function CheckOut(props) {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [coupon, setCouponCode] = useState('')
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    console.log('handle event change ', event.target.value)
    setQuantity(event.target.value)
  }

  /*
  useEffect(() => {
    console.log('get inside calculate the Price useEffect')
    setPrice(calculatePrice(props.data.price, quantity))
  }, [props.data.price, quantity])
*/
  function handleListItemClick(event, index) {
    console.log('handle Click list item')
    setSelectedIndex(index)
  }

  function handleOpenModal() {
    console.log('open modal')
    // implements open modal function
  }
  const handleFoodMenu = () => {
    navigate('/FoodMenu')
  }

  return (
    <div className="content">
      <Typography variant="h1" align="center">
        Check Out
      </Typography>
      <Typography align="left">
        Method
      </Typography>
      <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
         <ListItemText primary="Pickup" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
         <ListItemText primary="Deliver to seat" />
        </ListItemButton>
        <Typography align="left">
        Payment Method
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="**** **** **** 1234" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AddCardIcon />
          </ListItemIcon>
          <ListItemText primary="Add a new Credit card" />
        </ListItemButton>
      </List>

      <Button
        variant="contained"
        size="large"
        align="center"
        onClick={handleOpen}
      >
        Submit Order
      </Button>
      <div></div>
      <FingerprintIcon></FingerprintIcon>
      <div></div>
      <Button
        variant="contained"
        
        size="large"
        align="center"
        onClick={handleOpen}
      >
        Pay with Touch ID
      </Button>
      <Modal
      open={open}
      onClick={handleFoodMenu}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component ="h2">
            Order successfully submitted. Thank you!
          </Typography>
          <ListItemIcon>
            <CreditScoreIcon></CreditScoreIcon>
          </ListItemIcon>
          <Button
          variant="contained"
        
          size="large"
          align="center"
          onClick={handleOpen}
          >
            Continue Shopping
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default CheckOut
