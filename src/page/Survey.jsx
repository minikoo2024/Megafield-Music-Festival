// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//     <div> {count} </div>
//     <button onClick={handleClick}>
//       You pressed me times
//     </button>
//    </>
//   );
// }

import Form from "react-bootstrap/Form";
import { useState } from "react";
import SlideButton from "react-slide-button";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function showScore(value) {
  return `${value}`;
}

function ScoreSlideButton() {
  // Please implement Score Slide Button codes
  //https://mui.com/material-ui/react-slider/    --> reference code page

  // blog page to see the explanation or adaptation of your code
  // https://velog.io/@mokyoungg/Library-%EA%B0%80%EA%B2%A9-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EC%82%AC%EC%9A%A9material-ui#1-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
  // check the url and follow the example codes

  const [score, setScore] = useState(0); // to show the number of slide bar

  function handleChange(event, newValue) {
    console.log("score update ? ", newValue);
    setScore(newValue);
  }

  return (
    <>
      <h2>Survey</h2>
      <h2>Rate the Festival</h2>
      <br />
      <h1>{score}</h1>
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={0}
          aria-label="Default"
          getAriaValueText={showScore}
          onChange={handleChange}
          step={5}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
}

const Survey = () => {
  const navigate = useNavigate();

  console.log("Survey Page entered");

  function moveToHome() {
    console.log("Feedback Submitted");
    navigate("/");
  }

  return (
    <>
      
      <ScoreSlideButton />

      <div className="FeedbackTextArea">
        <Form.Text id="festivalHelp" muted>
          How can we improve the festival?
        </Form.Text>
        <Form.Label htmlFor="inputFeedback">Feedback: </Form.Label>
        <Form.Control
          type="feedback"
          id="inputFeedback"
          aria-describedby="festivalHelp"
        />
        <Button variant="primary" size="lg" type="submit" onClick={moveToHome}>
          Submit
        </Button>
      </div>
    </>
  );
};



export default Survey;