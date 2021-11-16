import React from "react";
import "./HeaderInfo.css";
import { BsFillInfoCircleFill } from "react-icons/bs";

const HeaderInfo = () => {
  return (
    <div className="d-flex justify-content-between content px-2">
      <Info data="All Sections" icon={<BsFillInfoCircleFill />} />
      <div className="d-flex">
        Time Left: <Info data="02:58:50" />
      </div>
      <div>
        <span>Question Paper</span>
        <span className="px-2">
          <BsFillInfoCircleFill /> Instructions
        </span>
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
