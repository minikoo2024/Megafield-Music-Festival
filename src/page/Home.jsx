import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <h2>Home Home Home</h2>
      <Button variant="primary" size="lg" onClick={handleClickSurvey}>
        Survey page
      </Button>
      <Button variant="primary" size="lg" onClick={handleClickMap}>
        Map page
      </Button>
      <Button variant="primary" size="lg" onClick={handleClickArtist}>
        Artist page
      </Button>
    </div>
  );
};

export default Home;
