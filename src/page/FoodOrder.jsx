import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FoodOrder() {
  const [price, setPrice] = useState(0);
  const [Quantity, setQuantity] = useState('');

  // Please refer to this link below to create the Food Order Form
  //https://react-bootstrap.netlify.app/docs/forms/overview

  //https://mui.com/material-ui/react-select/

  // Form control, Form select, Form checkbox, Form radio component

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  function calculatePrice() {
    // use price and setPrice to calculate the price of Food, and show the price on Website;
    const setPrice=1000;
    const quantity=0; //how to do i receive the value from the drop down menu? - MK
    const price=setPrice*quantity;
    
  }

  return (

    
    <>
      <Form.Select aria-label="Default select example">
      <option>Menu Select</option>
      <option value="1">Tteokbokki</option>
      <option value="2">Kimbap</option>
      <option value="3">Kkochi</option>
    </Form.Select>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Quantity}
          label="Quantity"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    </>
  );
}

export default FoodOrder;
