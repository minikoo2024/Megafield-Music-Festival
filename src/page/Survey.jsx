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
//import Slider from "@material-ui/core/Slider";
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

function ScoreSlideButton() {
  // Please implement Score Slide Button codes
  //https://mui.com/material-ui/react-slider/    --> reference code page

  // blog page to see the explanation or adaptation of your code
  // https://velog.io/@mokyoungg/Library-%EA%B0%80%EA%B2%A9-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EC%82%AC%EC%9A%A9material-ui#1-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0
  // check the url and follow the example codes
  const [reset, setReset] = useState(0);

  return (
    <>
      <div>{/* write the code below this comment line */}</div>
    
      <h2>Survey</h2>
      <h2>Rate the Festival</h2>

    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={0.25}
        marks
        min={0.1}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
          </>
  );
}

const Survey = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  console.log("Survey Page entered");

  function sayHello() {
    // alert("Thank you for your feedback!");
    console.log("Feedback Submitted");
    navigate("/");
  }

  function handleClick() {
    setCount(count + 1);
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
        <Button variant="primary" size="lg" type="submit" onClick={sayHello}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Survey;
