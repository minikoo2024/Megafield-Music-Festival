import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Map from "./page/Map.jsx";
import Artist from "./page/Artist";

function App() {
  console.log("enter app");

  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/Map" component={Map} />
      <Route path="/Artist" component={Artist} />
    </Routes>
  );
}

export default App;
