import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="d-flex justify-content-between mb-2 footer">
      <div>
        <Button className="btns" variant="outline-dark">
          Mark for Review & Next
        </Button>
        <Button className="btns" variant="outline-dark">
          Clear Response
        </Button>
      </div>
      <div>
        <Button
          style={{ marginRight: "8rem" }}
          className="btns"
          variant="primary"
        >
          Save & Next
        </Button>
        <Button style={{ color: "white" }} className="btns" variant="info">
          Submit
        </Button>
      </div>
    </Navbar>
  );
};

export default Footer;
