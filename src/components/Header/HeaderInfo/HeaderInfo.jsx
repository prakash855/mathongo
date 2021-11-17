import React from "react";
import "./HeaderInfo.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcQuestions } from "react-icons/fc";
import Countdown from "react-countdown";

const HeaderInfo = () => {
  const milliSecondsInMinute = 60 * 1000;
  const milliSecondsInOneHour = milliSecondsInMinute * 60;
  const millisecondsInThreeHour = 3 * milliSecondsInOneHour;

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
    );
  };

  return (
    <div className="d-flex justify-content-between align-items-center content px-2">
      <div className="sections">
        <Info
          data="All Sections"
          icon={<BsFillInfoCircleFill color="#4C96E3" />}
        />
      </div>
      <div className="d-flex">
        Time Left:{" "}
        <Info
          data={
            <Countdown
              date={Date.now() + millisecondsInThreeHour}
              renderer={renderer}
            />
          }
        />
      </div>
      <div className="d-flex">
        <div>
          <FcQuestions /> Question Paper
        </div>
        <div className="px-2">
          <BsFillInfoCircleFill color="#4C96E3" /> Instructions
        </div>
      </div>
    </div>
  );
};

const Info = ({ data, icon }) => {
  return (
    <div
      style={{ background: "#010105", borderRadius: "5px", padding: "1px 5px" }}
    >
      {data} {icon}
    </div>
  );
};

export default HeaderInfo;
