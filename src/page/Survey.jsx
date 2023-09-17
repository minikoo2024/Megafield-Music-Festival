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
