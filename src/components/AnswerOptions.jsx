import React, { useState } from "react";
import "../styles.css";
import questionsArray from "../questions";
const AnswerOptions = (props) => {
  const { index } = props;
  const [questionArray, setQuestionArray] = useState(questionsArray);

  const setAnswerHandler = (_event, element) => {
    questionArray[index]["answer"] = element;
    setQuestionArray([...questionArray]);
  };
  console.log(questionArray);
  return (
    <div className="optionsStyle">
      {questionArray[index].optionsArray.map((element) => (
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
