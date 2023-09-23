import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import AmericanFood from "../resources/food order/American Food.jpg";

//https://mui.com/material-ui/react-list/#simple-list

// Add more Food list
const foodList = [
  { menu: "pizza", price: 5000, img: AmericanFood },
  { menu: "hotdog", price: 3000 },
];

function handleClickFoodMenu() {
  // implement click function to move to Food Order Page
  // When click the list of Food Menu
  // use onClick event
}

function importFoodMenuImage() {
  /*
  <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
  */
}

function FoodMenu() {
  console.log("Food Menu Page");
  // Food list with image
  // resource import

  // 1. Food Menu Title
  // 2. Return button
  // 3. show Food menu list

  return (
    <>
      {foodList.map(function (data) {
        return <div>Menu: {data.menu}, price: data.price</div>;
      })}
    </>
  );
}

export default FoodMenu;
