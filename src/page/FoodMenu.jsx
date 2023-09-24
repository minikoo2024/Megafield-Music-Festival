import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import * as Mui from "@mui/material";
import {Box, ListItemButton, List, ListItem, ListItemAvatar, ListItemText, Avatar, Button} from "@mui/material";
import americanFood1 from "../resources/foodMenu/americanFood1.jpg";
import koreanFood1 from "../resources/foodMenu/koreanFood1.jpg";



//https://mui.com/material-ui/react-list/#simple-list

let foodMenuList = [ {country: "usa", image: americanFood1}, {country: "korea", image: koreanFood1}, {country: "japan", image: koreanFood1}];

// Add more Food list
let americanFoodList = [
  { menu: "Hamburger", src: "" },
];

let koreanFoodList = [
  // first data
  { menu: "Hotdog", price: 3000, src: "" },   // index : 0 
  // 2nd data
  { menu: "Tteokbokki", price: 4000, src: "" }, // index : 1
  // 3rd data
  { menu: "Gimbap", price:3500, src: "" }, // index: 2
];

function importFoodMenuImage() {

  koreanFoodList.map((food, index) => {  // food = koreanFoodList's each data 
    console.log("food list update source", index);  
    food.src = `../resources/foodMenu/koreanFood${index + 1}.jpg`

    console.log("food list update source", food.src);
  });
}

function FoodMenu() {
  console.log("Food Menu Page");
  // Food list with image
  // resource import

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  function returnHome() {
    console.log("go back to home page");
    navigate("../");
  }

  function handleClickFoodMenu() {
    // implement click function to move to Food Order Page
    // When click the list of Food Menu
    // use onClick event
    console.log("@@@ go to Order page @@@");
    navigate("./FoodOrder");
  }

  // 1. Food Menu Title
  // 2. Return button
  // 3. show Food menu list
  importFoodMenuImage();

  return (
    <>
    <Button onClick={returnHome}>Return</Button>

      {
        foodMenuList.map((data)=> {
          return(
            <List>
              <ListItem>
              
                <img src={data.image} style={{width: "60vw", height: "80vh", zIndex: -1, align: "center"}} alt={data.country} onClick={handleClickFoodMenu} />
                <h2 style={{zIndex: 10, align: "center", position: "absolute", left: 100 }}>{data.country}</h2>
              </ListItem>
            </List>
          )
        })
      }

      <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <nav aria-label="Food Menu List">
          <List>
          {
            koreanFoodList.map((food) => {
              return(
                <ListItem disablePadding>
                  <ListItemButton>
                  {/*
                    <ListItemIcon>
                      <InboxIcon />
                      <img src={food.src} style={{width: 40}} alt={food.menu} />
                      </ListItemIcon>                  
                   */}
                    <ListItemAvatar>
                      <Avatar alt={food.menu} src={food.src} />
                    </ListItemAvatar>
                    <ListItemText primary={food.menu} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }  
          </List>
        </nav>
      </Box>
    </>
  );
}

export default FoodMenu;
