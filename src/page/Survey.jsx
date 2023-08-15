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

function ScoreSlideButton() {
  // Please implement Score Slide Button codes
  //  https://reactjsexample.com/custom-react-slide-button-for-both-desktop-and-mobile/
  // check the url and follow the example codes
  return (
    <>
      <div>{/* write the code below this comment line */}</div>
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
    </>
  );
}

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
