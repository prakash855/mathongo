import React from "react";
import Questions from "./Questions/Questions";
import Answers from "./Answers/Answers";
import { Col, Container, Row } from "react-bootstrap";
import './Content.css'

const Content = () => {
  return (
    <Container>
      <Row>
        <Col lg={9}>
          <Questions />
        </Col>
        <Col lg={3} className="rightcontent">
          <Answers />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
