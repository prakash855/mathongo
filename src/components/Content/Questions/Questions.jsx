import { useState } from "react";
import { Tabs, Tab, NavDropdown } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Question from "./Question/Question";
import ResponsiveQuestions from "./Question/ResponsiveQuestions";
import "./Questions.css";

const Questions = () => {
  const [key, setKey] = useState("one");

  return (
    <>
      <ResponsiveQuestions />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 tabs"
        variant="pills"
      >
        <Tab
          eventKey="one"
          title={[
            "PHYSICS SINGLE CORRECT ",
            <BsFillInfoCircleFill color="#4C96E3" />,
          ]}
        >
          <Question />
        </Tab>
        <Tab
          eventKey="two"
          title={[
            "PHYSICS MUTIPLE CORRECT ",
            <BsFillInfoCircleFill color="#4C96E3" />,
          ]}
        >
          <Question />
        </Tab>
        <Tab
          eventKey="three"
          title={[
            "PHYSICS NUMERICAL CORRECT ",
            <BsFillInfoCircleFill color="#4C96E3" />,
          ]}
        >
          <Question />
        </Tab>
        <Tab
          eventKey="four"
          title={[
            "CHEMISTRY SINGLE CORRECT ",
            <BsFillInfoCircleFill color="#4C96E3" />,
          ]}
        >
          <Question />
        </Tab>
        <Tab
          eventKey="five"
          title={[
            "CHEMISTRY MULTIPLE CORRECT ",
            <BsFillInfoCircleFill color="#4C96E3" />,
          ]}
        >
          <Question />
        </Tab>
      </Tabs>
    </>
  );
};
export default Questions;
