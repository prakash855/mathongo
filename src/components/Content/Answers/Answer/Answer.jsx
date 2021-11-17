import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <>
      <div className="aligns justify-content-between">
        <div className="aligns">
          <div id="spriteOne">3</div>
          <div className="text">Answered</div>
        </div>
        <div className="aligns">
          <div id="spriteTwo">1</div>
          <div className="text">Not Answered</div>
        </div>
      </div>
      <div className="aligns justify-content-between">
        <div className="aligns">
          <div id="spriteThree">0</div>
          <div className="text">Not Visited</div>
        </div>
        <div className="aligns">
          <div id="spriteFour">1</div>
          <div className="text">Marked for Review</div>
        </div>
      </div>
      <div className="aligns justify-content-between">
        <div className="aligns">
          <div id="spriteFive">1</div>
          <div className="text">
            Answered and Marked for Review (will be considered for evaluation)
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
