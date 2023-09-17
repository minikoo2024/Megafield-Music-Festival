import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import home from "../resources/home/Home.jpg";

const Home = () => {
  console.log("home page");
  const navigate = useNavigate();

  function handleClickSurvey() {
    console.log("home page handle click Survey function called");
    navigate("./Survey");
  }

  function handleClickMap() {
    console.log("home page handle click Map function called");
    navigate("./Map");
  }

  function handleClickArtist() {
    console.log("home page handle click Map function called");
    navigate("./Artist");
  }

  function handleClickFoodMenu() {
    console.log("home page handle click Map function called");
    navigate("./FoodMenu");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "1080px",
        backgroundImage: `url(${home})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>Home</h2>
      <Button
        variant="primary"
        size="lg"
        type="button"
        onClick={handleClickSurvey}
        style={{ margin: "10px" }}
      >
        Survey
      </Button>
      <Button
        variant="primary"
        size="lg"
        type="button"
        onClick={handleClickMap}
        style={{ margin: "10px" }}
      >
        Map
      </Button>
      <Button
        variant="primary"
        size="lg"
        type="button"
        onClick={handleClickArtist}
        style={{ margin: "10px" }}
      >
        Artist
      </Button>
      <Button
        variant="primary"
        size="lg"
        type="button"
        onClick={handleClickFoodMenu}
        style={{
          margin: "10px",
          width: "200px",
          height: "50px",
          fontSize: "20pt",
          fontFamily: "fantasy",
        }} //style code 수정
      >
        Food Order
      </Button>
    </div>
  );
};

export default Home;
/**
 * 1. Home Style 수정
 * 2. Map img style option 추가
 * 3. TimeTable -> Profile page
 * 4. Survey page -> scorll button -> number 나오도록 수정 (component update)
  
command 
git add . 


*/
