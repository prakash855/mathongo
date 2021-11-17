import React from "react";
import "./Option.css";

const Option = () => {
  return (
    <>
      <p>Choose a question</p>
      <div className="d-flex justify-content-evenly">
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="one">3</div>
        <div className="one">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
      </div>
    </>
  );
};

export default Option;
