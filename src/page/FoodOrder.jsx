import Form from '@mui/material/FormGroup'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Typography } from '@mui/material'

// Please refer to this link below to create the Food Order Form
//https://react-bootstrap.netlify.app/docs/forms/overview
//https://mui.com/material-ui/react-select/

// Form control, Form select, Form checkbox, Form radio component

// dictionary key, value pair  menu name --- key, foodPrice=value
const foodPriceMap = {}
foodPriceMap['Tteokbokki'] = 3500
foodPriceMap['Kimbap'] = 2000
foodPriceMap['Kkochi'] = 1500
foodPriceMap['default'] = 0

function calculatePrice(menu, quantity) {
  // use price and setPrice to calculate the price of Food, and show the price on Website;
  //how to do i receive the value from the drop down menu? - MK
  const foodPrice = foodPriceMap[menu]
  console.log('food Menu: ', menu, 'foodPrice : ', foodPrice)
  return foodPrice
}

function FoodOrder() {
  console.log('FoodOrder page')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [menu, setMenu] = useState('default')

  const handleChange = (event) => {
    console.log('handle event change ', event.target.value)
    setQuantity(event.target.value)
  }

  const handleMenuSelect = (event) => {
    console.log('handle menu selection')
    setMenu(event.target.value)
  }

  useEffect(() => {
    console.log('get inside calculate the Price useEffect')
    setPrice(calculatePrice(menu, quantity))
  }, [menu, quantity])

  return (
    <>
      {/**
    <Form.Select
        aria-label="Default select example"
        onChange={handleMenuSelect}
      >
        <option>Menu Select</option>
        <option value="Tteokbokki">Tteokbokki</option>
        <option value="Kimbap">Kimbap</option>
        <option value="Kkochi">Kkochi</option>
      </Form.Select>
    
     */}

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quantity}
            label="Quantity"
            onChange={handleChange}
          >
            <MenuItem value={0}>One</MenuItem>
            <MenuItem value={1}>Two</MenuItem>
            <MenuItem value={2}>Three</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h4" color="black" align="center">
          {price}
        </Typography>
      </Box>
    </>
  )
}

export default FoodOrder
