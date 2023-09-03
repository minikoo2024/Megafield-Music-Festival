import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function FoodOrder() {
  const [price, setPrice] = useState(0);

  // Please refer to this link below to create the Food Order Form
  //https://react-bootstrap.netlify.app/docs/forms/overview

  //https://mui.com/material-ui/react-select/

  // Form control, Form select, Form checkbox, Form radio component

  function calculatePrice() {
    // use price and setPrice to calculate the price of Food, and show the price on Website
  }

  return (
    <>
      <div> Food Order</div>
    </>
  );
}

export default FoodOrder;
