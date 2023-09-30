import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import americanFood1 from '../resources/foodMenu/americanFood1.jpg'
import koreanFood1 from '../resources/foodMenu/koreanFood1.jpg'
import '../style/content.css'

let foodMenuList = [
  { country: 'USA', image: americanFood1 },
  { country: 'KOREA', image: koreanFood1 },
  { country: 'JAPAN', image: koreanFood1 },
]

// Add more Food list
let americanFoodList = [{ menu: 'Hamburger', src: '' }]

let koreanFoodList = [
  // first data
  { menu: 'Hotdog', price: 3000, src: '' }, // index : 0
  // 2nd data
  { menu: 'Tteokbokki', price: 4000, src: '' }, // index : 1
  // 3rd data
  { menu: 'Gimbap', price: 3500, src: '' }, // index: 2
]

function importFoodMenuImage() {
  koreanFoodList.map((food, index) => {
    // food = koreanFoodList's each data
    console.log('food list update source', index)
    food.src = `../resources/foodMenu/koreanFood${index + 1}.jpg`

    console.log('food list update source', food.src)
  })
}

function FoodMenu() {
  console.log('Food Menu Page')
  // Food list with image
  // resource import

  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  function handleClickFoodMenu() {
    // implement click function to move to Food Order Page
    // When click the list of Food Menu
    // use onClick event
    console.log('@@@ go to Order page @@@')
    navigate('./FoodOrder')
  }

  // 1. Food Menu Title
  // 2. Return button
  // 3. show Food menu list
  importFoodMenuImage()

  return (
    <div className="content">
      {foodMenuList.map((data) => {
        return (
          <List
            justifyContent="center"
            align="center"
            alginItems="center"
            style={{ left: 100 }}
          >
            <ListItem>
              <img
                className="listImage"
                src={data.image}
                alt={data.country}
                onClick={handleClickFoodMenu}
              />
              <Typography
                variant="h4"
                color="black"
                align="center"
                zIndex={10}
                left={200}
                position={'absolute'}
                gutterBottom
              >
                {data.country}
              </Typography>
            </ListItem>
          </List>
        )
      })}
    </div>
  )
}

export default FoodMenu
