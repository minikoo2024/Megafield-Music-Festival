import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Map from "./page/Map.jsx";
import Artist from "./page/Artist";
import Survey from "./page/Survey";
import FoodOrder from "./page/FoodOrder";
import { PC, Mobile } from "./module/responseWebModule";
import FoodMenu from "./page/FoodMenu";

function App() {
  return (
    <>
      <Mobile>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/FoodOrder" element={<FoodOrder />} />
          <Route path="/FoodMenu" element={<FoodMenu/>} />
        </Routes>
      </Mobile>
      <PC>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Survey" element={<Survey />} />
          <Route path="/FoodOrder" element={<FoodOrder />} />
          <Route path="/FoodMenu" element={<FoodMenu/>} />
        </Routes>
      </PC>
    </>
  );
}

export default App;
