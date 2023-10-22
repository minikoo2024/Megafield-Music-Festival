import '../style/content.css'
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Box,
  Modal,
  Container,
  CssBaseline,
  ListSubheader,
  Divider,
} from '@mui/material'
import AddCardIcon from '@mui/icons-material/AddCard'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import CreditScoreIcon from '@mui/icons-material/CreditScore'

//https://elements.envato.com/checkout-payment-app-screen-for-food-95Z3GF4

// 1. list items 2-3개 추가하기 (credit card numbers, paypal logo, etc)

//2. --> payment clicked : Order completed 같은 message 전달하는 modal 띄우기
//https://mui.com/material-ui/react-modal/

// 3. payment selected -> style change (selected item -> border color changed -> stylesheet update)

// 4. coupon code text-field에 들어오는 string value setCouponCode -> Typograpy로 registered 된 coupon show
// https://mui.com/material-ui/react-text-field

//4. finger print payment -- > add finger print button below\ (optional assignment)
// https://mui.com/material-ui/react-button/#color

const modalStyle = {
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

function CheckOutModal(props) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleClickModal = () => {
    console.log('close modal popup: ', props.open)
    setOpen(props.open)
    navigate('../../FoodMenu')
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Order successfully submitted. Thank you!
        </Typography>
        <ListItemIcon>
          <CreditScoreIcon></CreditScoreIcon>
        </ListItemIcon>
        <Button
          variant="contained"
          size="large"
          align="center"
          onClick={handleClickModal}
        >
          Continue Shopping
        </Button>
      </Box>
    </Modal>
  )
}

function CheckOut(props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [orderIdx, setOrderIdx] = useState(0)
  const [coupon, setCouponCode] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  useEffect(() => {
    console.log('coupon registering')
    setCouponCode('coupon')
  }, [coupon])

  function handleListItemClick(event, index) {
    console.log('handle Click list item')
    setSelectedIndex(index)
  }

  function orderOptionSelect(event, index) {
    console.log('order Option Select')
    setOrderIdx(index)
  }

  return (
    <div className="content" style={{ display: props.show ? 'block' : 'none' }}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" align="center">
          Check Out
        </Typography>
        <Box sx={{ height: '20vh', width: '65vh' }}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-labelledby="Check Out List"
            subheader={
              <ListSubheader component="div" id="Check Out List">
                Choose Pick up option
              </ListSubheader>
            }
          >
            <ListItemButton
              sx={{ mt: 2 }}
              selected={orderIdx === 0}
              onClick={(event) => orderOptionSelect(event, 0)}
            >
              <ListItemText primary="Pickup" />
            </ListItemButton>
            <ListItemButton
              sx={{ mt: 2 }}
              selected={orderIdx === 1}
              onClick={(event) => orderOptionSelect(event, 1)}
            >
              <ListItemText primary="Deliver to seat" />
            </ListItemButton>
          </List>
        </Box>
        <Divider />
        <Box sx={{ height: '20vh', width: '65vh' }}>
          <Typography align="left"></Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-label="payment"
            subheader={
              <ListSubheader component="div" id="Check Out List">
                Payment Method
              </ListSubheader>
            }
          >
            <ListItemButton
              sx={{ mt: 2 }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <CreditCardIcon sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary="**** **** **** 1234" />
            </ListItemButton>
            <ListItemButton
              sx={{ mt: 2 }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <AddCardIcon sx={{ mr: 2 }} />
              </ListItemIcon>
              <ListItemText primary="Add a new Credit card" />
            </ListItemButton>
          </List>
        </Box>
        <Box sx={{ height: '40vh', width: '65vh', maxWidth: 280 }}>
          <Button
            variant="contained"
            size="large"
            align="center"
            onClick={handleOpen}
            sx={{ mr: 3, mt: 3, mb: 3 }}
          >
            Submit Order {props.price} won
          </Button>

          <FingerprintIcon sx={{ mr: 2 }} />

          <Button
            variant="contained"
            size="large"
            align="center"
            onClick={handleOpen}
          >
            Pay with Touch ID
          </Button>
        </Box>
      </Container>
      <CheckOutModal open={open} />
    </div>
  )
}

export default CheckOut
