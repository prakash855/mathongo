import React, { useState, useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Spinner } from "react-bootstrap";
import "./Question.css";

const Question = () => {
  const [myQuestion, setMyQuestion] = useState({});
  const [loaded, setLoaded] = useState(true);

  async function fetchQuestion() {
    const API = `https://run.mocky.io/v3/38db11db-fc3e-401b-be86-9699ad83d955`;
    const response = await fetch(API);
    const questions = await response.json();
    // waits until the request completes...
    setMyQuestion(questions.question);
    setLoaded(false);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <>
      {loaded ? (
        <Spinner animation="grow" className="loader" />
      ) : (
        <>
          <h6>Question No 1</h6>
          <h5 className="questionHead">
            Physics Single Correct(Maximum Marks:18)
          </h5>
          <h5 className="questionHead">Only One Option Correct Type</h5>
          <p className="questionHead">
            The section contains 6 multiple type questions. Each question has
            four choice (A), (B), (C) and (D) out of which ONLY ONE is correct
          </p>
          <hr />
          {Object.keys(myQuestion).length && (
            <MathJaxContext>
              <MathJax className="question">{myQuestion.question.text}</MathJax>
              {myQuestion.options.map((option, id) => (
                <div key={id} className="d-flex question">
                  <input
                    type="radio"
                    id={option.text}
                    name="jee_advanced_questions"
                    value={option.text}
                  />
                  <MathJax>
                    <label for={option.text}>{option.text}</label>
                  </MathJax>
                </div>
              ))}
            </MathJaxContext>
          )}
        </>
      )}
    </>
  );
};

export default Question;
