import React from "react";
import Answer from "./Answer/Answer";
import Option from "./Option/Option";
import "./Answers.css";
const Answers = () => {
  return (
    <>
      <Answer />
      <div className="single_correct">PHYSICS SINGLE CORRECT</div>
      <Option />
    </>
  );
};

export default Answers;
