import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import '../style/content.css'
import { useState } from 'react'
import FoodOrder from './FoodOrder'

let foodSubMenuList = [
  // first data
  { menu: 'Hotdog', price: 3000, image: '' },
  // 2nd data
  { menu: 'Tteokbokki', price: 4000, image: '' },
  // 3rd data
  { menu: 'Gimbap', price: 3500, image: '' },
]

function importFoodSubMenuImage() {
  foodSubMenuList.map((food, index) => {
    console.log('food list update source', index)
    food.image = require(`../resources/foodMenu/koreanFood${index + 1}.jpg`)

    console.log('food list update source', food.image)
  })
}

function FoodSubMenu(props) {
  console.log('FoodSubMenu Page -', props.country)
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState('')

  function handleClickFoodOrder(clickedMenu) {
    console.log('go to Order page')
    setShow(true)
    setMenu(clickedMenu)
  }

  const handleShow = () => setShow(false)

  importFoodSubMenuImage()

  return (
    <div className="content">
      <div style={{ display: show ? 'none' : 'block' }}>
        <ArrowBackIosIcon sx={{ mr: 3 }} onClick={handleShow} />
        <List className="listTag">
          {foodSubMenuList.map((data) => {
            return (
              <ListItem
                className="foodList"
                key={data.menu}
                onClick={() => handleClickFoodOrder(data)}
              >
                <img className="listImage" src={data.image} alt={data.menu} />
                <Typography className="listText" variant="h4" gutterBottom>
                  {data.menu}
                </Typography>
              </ListItem>
            )
          })}
        </List>
      </div>
      {show ? <FoodOrder menu={menu} /> : null}
    </div>
  )
}
export default FoodSubMenu
