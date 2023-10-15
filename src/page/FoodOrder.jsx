import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router'

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
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [show, setShow] = useState(false)

  const handleChange = (event) => {
    console.log('handle event change ', event.target.value)
    setQuantity(event.target.value)
  }

  const handleCheckout = () => {
    navigate('./CheckOut')
  }

  useEffect(() => {
    console.log('get inside calculate the Price useEffect')
    setPrice(calculatePrice(props.data.price, quantity))
  }, [props.data.price, quantity])

  return (
    <div className="content">
      <Typography variant="h2" color="black" align="center">
        {props.data.menu}
      </Typography>

      <Box sx={{ minWidth: 120 }} align="center">
        <img
          src={props.data.image}
          alt={props.data.menu}
          className="imageSrc"
        />
        <FormControl>
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
    </div>
  )
}

export default FoodOrder
