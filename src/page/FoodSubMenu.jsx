import Typography from '@mui/material/Typography'
import { List, ListItem, Box, Container, CssBaseline } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import '../style/content.css'
import { useState } from 'react'
import FoodOrder from './FoodOrder'

let foodSubMenuList = [
  { menu: 'Hotdog', price: 3000, image: '' },
  { menu: 'Tteokbokki', price: 4000, image: '' },
  { menu: 'Gimbap', price: 3500, image: '' },
]

function importFoodSubMenuImage() {
  foodSubMenuList.forEach((food, index) => {
    console.log('food list update source', index)
    food.image = require(`../resources/foodMenu/koreanFood${index + 1}.jpg`)
    console.log('food list update source', food.image)
  })
}

function FoodSubMenu() {
  console.log('FoodSubMenu Page')
  const [show, setShow] = useState(false)
  const [data, setData] = useState(null) // object /array type도 전달 가능

  function handleClickFoodOrder(clickedMenu) {
    console.log('go to Order page')
    setData(clickedMenu)
    setShow(true)
  }

  const handleShow = () => setShow(false)

  importFoodSubMenuImage()

  return (
    <>
      <div className="content" style={{ display: show ? 'none' : 'block' }}>
        <ArrowBackIosIcon sx={{ mr: 3 }} onClick={handleShow} />
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: '88vh', width: '60vh' }} align="center">
            <List className="listTag">
              {foodSubMenuList.map((data) => {
                return (
                  <ListItem
                    className="foodList"
                    key={data.menu}
                    onClick={() => handleClickFoodOrder(data)} // data = clickedMenu
                  >
                    <img
                      className="listImage"
                      src={data.image}
                      alt={data.menu}
                    />
                    <Typography
                      className="listText"
                      variant="h5"
                      align="center"
                      gutterBottom
                    >
                      {data.menu}
                    </Typography>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Container>
      </div>
      {show ? <FoodOrder data={data} /> : null}
    </>
  )
}
export default FoodSubMenu
