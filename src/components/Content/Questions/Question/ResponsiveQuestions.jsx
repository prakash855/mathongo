import React from "react";
import { NavDropdown } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";

const ResponsiveQuestions = () => {
  return (
    <NavDropdown
      title={[
        "PHYSICS SINGLE CORRECT ",
        <BsFillInfoCircleFill color="#4C96E3" />,
      ]}
      id="nav-dropdown"
      className="mb-10"
    >
      <NavDropdown.Item eventKey="4.1">
        {["PHYSICS SINGLE CORRECT ", <BsFillInfoCircleFill color="#4C96E3" />]}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.2">
        {["PHYSICS MUTIPLE CORRECT ", <BsFillInfoCircleFill color="#4C96E3" />]}
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">
        {[
          "CHEMISTRY SINGLE CORRECT ",
          <BsFillInfoCircleFill color="#4C96E3" />,
        ]}
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.4">
        {[
          "CHEMISTRY MULTIPLE CORRECT ",
          <BsFillInfoCircleFill color="#4C96E3" />,
        ]}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default ResponsiveQuestions;
