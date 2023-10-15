import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import americanFood1 from '../resources/foodMenu/americanFood1.jpg'
import koreanFood1 from '../resources/foodMenu/koreanFood1.jpg'
import japaneseFood1 from '../resources/foodMenu/japaneseFood1.jpg'
import '../style/content.css'
import { useNavigate } from 'react-router'

let foodMenuList = [
  { country: 'KOREA', image: koreanFood1 },
  { country: 'USA', image: americanFood1 },
  { country: 'JAPAN', image: japaneseFood1 },
]

function FoodMenu() {
  const navigate = useNavigate()

  function handleClickFoodMenu() {
    console.log('get foodSubMenu info')
    navigate('./FoodSubMenu', { state: { menu: 'Korea', price: 500 } })
  }

  return (
    <div className="content">
      <List className="listTag">
        {foodMenuList.map((data) => {
          return (
            <ListItem
              className="foodList"
              key={data.country}
              onClick={() => handleClickFoodMenu(data)}
            >
              <img className="listImage" src={data.image} alt={data.country} />
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
