import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import AmericanFood from "../resources/food order/American Food.jpg";
import BunsikFood from "../resources/food order/Bunsik.jpg";
import GimbapFood from "../resources/food order/Gimbap.png";
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";



//https://mui.com/material-ui/react-list/#simple-list
export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(!open);
  };
  function returnHome() {
    console.log("go back to home page");
    navigate("../"); // -> ./Map
  
    // ./Profile     ./Artist/Profile
  }

  return (
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <Button onClick={returnHome}>Return Home</Button>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt="American" src={AmericanFood}/>
        </ListItemAvatar>
        <ListItemText primary="American" />
      </ListItemButton>
     
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Bunsik" src={BunsikFood}/>
        </ListItemAvatar>
        <ListItemText primary="Bunsik" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <ListItemAvatar>
              <Avatar alt="Gimbap" src={GimbapFood}/>
             </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="Gimbap" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    
  );
  
  
}


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

//export default FoodMenu;
