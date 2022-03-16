import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router";
import questionsArray from "../questions";
import { useDispatch } from "react-redux";

const AnswerOptions = (props) => {
  const { index } = props;
  const navigate = useNavigate();
  const [questionArray, setQuestionArray] = useState([]);
  const dispatch = useDispatch();
  const setAnswerHandler = (_event, element) => {
    questionArray[index] = { answer: element };
    setQuestionArray([...questionArray]);
    if (index === 9) {
      dispatch({ type: "saveData", userArray: questionArray });
      navigate("/displayResult");
    }
  };
  return (
    <div className="optionsStyle">
      {questionsArray[index].optionsArray.map((element) => (
        <div>
          <input
            key={element}
            value={element}
            type="radio"
            name="answer"
            onChange={(event) => setAnswerHandler(event, element)}
          />
          <label htmlFor={element}>{element}</label>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
