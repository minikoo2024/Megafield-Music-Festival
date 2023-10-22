import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material'
import CheckOut from './CheckOut'

// Please refer to this link below to create the Food Order Form
//https://react-bootstrap.netlify.app/docs/forms/overview
//https://mui.com/material-ui/react-select/

// Form control, Form select, Form checkbox, Form radio component

export const changeShowValue = () => {}

function calculatePrice(foodPrice, quantity) {
  console.log('foodPrice : ', foodPrice, ' food Quantity: ', quantity)
  return foodPrice * quantity
}

function FoodOrder(props) {
  // props : menu / price / image Path
  console.log('FoodOrder page -- ', props)
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [show, setShow] = useState(false)

  const handleChange = (event) => {
    console.log('handle event change ', event.target.value)
    setQuantity(event.target.value)
  }

  const handleCheckout = () => {
    console.log('check out page open')
    setShow(true)
  }

  useEffect(() => {
    console.log('get inside calculate the Price useEffect')
    setPrice(calculatePrice(props.data.price, quantity))
  }, [props.data.price, quantity])

  return (
    <>
      <div className="content" style={{ display: show ? 'none' : 'block' }}>
        <CssBaseline />

        <Container maxWidth="sm">
          <Typography variant="h2" color="black" align="center">
            {props.data.menu}
          </Typography>

          <Box sx={{ height: '100vh', width: '40vw' }} align="center">
            <img
              src={props.data.image}
              alt={props.data.menu}
              className="imageSrc"
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={quantity}
                label="Quantity"
                onChange={handleChange}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h4" color="black" align="center">
              ₩{price}
            </Typography>

            <Button
              variant="contained"
              size="large"
              align="center"
              onClick={handleCheckout}
            >
              Add to Order {price} won
            </Button>
          </Box>
        </Container>
      </div>
      <CheckOut show={show} price={price} />
    </>
  )
}

export default FoodOrder
