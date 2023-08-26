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
import { useNavigate } from "react-router-dom";

function ScoreSlideButton() {
  // Please implement Score Slide Button codes
  //  https://reactjsexample.com/custom-react-slide-button-for-both-desktop-and-mobile/
  // check the url and follow the example codes
  const [reset, setReset] = useState(0);
  return (
    <>
      <div>{/* write the code below this comment line */}</div>
      <h2>Survey</h2>
      <SlideButton
        mainText="Rate the Festival"
        onSlideDone={function () {
          console.log("Done!");
        }}
        reset={reset}
      />
      <button onClick={() => {
        setReset(counter => counter + 1)
      }}
      >
        Reset
      </button>

    </>
  );
}

function FeedbackTextArea() {
  // Please implement Feedback TextArea
  // form :  https://react-bootstrap.netlify.app/docs/forms/form-text
  // check the url and follow the example codes
  return (
    <>
      <div>{/* write the code below this comment line */}</div>
      <Form.Text id="festivalHelp" muted>
        How can we improve the festival?
      </Form.Text>
      <div></div>
      <Form.Label htmlFor="inputFeedback">Feedback: </Form.Label>
      <Form.Control
        type="feedback"
        id="inputFeedback"
        aria-describedby="festivalHelp"
      />
      <div></div>
      <button onClick={sayHello}>Submit</button>
    </>
  );
}

function sayHello() {
  alert('Thank you for your feedback!');
}
// Usage


const Survey = () => {
  
  const [count, setCount] = useState(0);

  console.log("Survey Page entered");

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <ScoreSlideButton />

      <FeedbackTextArea />
      
    </>
  );
};

export default Survey;
