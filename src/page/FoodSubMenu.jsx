import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import hotdog from '../resources/foodMenu/koreanFood1.jpg'
import gimbap from '../resources/foodMenu/koreanFood2.jpg'
import tteokbokki from '../resources/foodMenu/koreanFood3.jpg'
import '../style/content.css'

let foodSubMenuList = [
    { name: 'Gimbap', image: gimbap },
    { name: 'Tteokbokki', image: tteokbokki },
    { name: 'Hotdog', image: hotdog },
]

let koreanFoodList = [
    // first data
    { menu: 'Hotdog', price: 3000, image: '../resources/foodMenu/koreanFood1.jpg' }, // index : 0
    // 2nd data
    { menu: 'Tteokbokki', price: 4000, image: '../resources/foodMenu/koreanFood3.jpg' }, // index : 1
    // 3rd data
    { menu: 'Gimbap', price: 3500, image: '../resources/foodMenu/koreanFood2.jpg' }, // index: 2
  ]

function importFoodSubMenuImage() {
    koreanFoodList.map((food, index) => {
      // food = koreanFoodList's each data
      console.log('food list update source', index)
      food.image = require(`../resources/foodMenu/koreanFood${index + 1}.jpg`)
  
      console.log('food list update source', food.image)
    })
  }

function FoodSubMenu(){
    console.log('Food Menu Page')

    const navigate = useNavigate();

    function handleClickFoodSubMenu(){
        console.log('go to Order page')
        navigate('./FoodOrder')
    }
    importFoodSubMenuImage()
    return (
        <div className="content">
          <List className="listTag">
            {foodSubMenuList.map((data) => {
              return (
                <ListItem
                  className="foodList"
                  key={data.name}
                  onClick={handleClickFoodSubMenu}
                >
                  <img className="listImage" src={data.image}/>
                  <Typography className="listText" variant="h4" gutterBottom>
                    {data.name}
                  </Typography>
                </ListItem>
              )
            })}
          </List>
        </div>
      )
}
export default FoodSubMenu