import { useNavigate } from 'react-router-dom'
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
let americanFoodList = [{ menu: 'Hamburger', image: '' }]

let koreanFoodList = [
  // first data
  { menu: 'Hotdog', price: 3000, image: '' }, // index : 0
  // 2nd data
  { menu: 'Tteokbokki', price: 4000, image: '../resources/foodMenu/koreanFood3.jpg' }, // index : 1
  // 3rd data
  { menu: 'Gimbap', price: 3500, image: '../resources/foodMenu/koreanFood2.jpg' }, // index: 2
]

function importFoodMenuImage() {
  koreanFoodList.map((food, index) => {
    // food = koreanFoodList's each data
    console.log('food list update source', index)
    food.image = require(`../resources/foodMenu/koreanFood${index + 1}.jpg`)

    console.log('food list update source', food.image)
  })
}

function FoodMenu() {
  console.log('Food Menu Page')
  // Food list with image
  // resource import

  const navigate = useNavigate()

  function handleClickFoodMenu() {
    // implement click function to move to Food Order Page
    // When click the list of Food Menu
    // use onClick event
    console.log('go to Korean food page')
    navigate('./FoodSubMenu')
  }

  // 1. Food Menu Title
  // 2. Return button
  // 3. show Food menu list
  importFoodMenuImage()

  return (
    <div className="content">
      <List className="listTag">
        {foodMenuList.map((data) => {
          return (
            <ListItem
              className="foodList"
              key={data.country}
              onClick={handleClickFoodMenu}
            >
              <img className="listImage" src={data.image}/>
              <Typography className="listText" variant="h4" gutterBottom>
                {data.country}
              </Typography>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default FoodMenu
