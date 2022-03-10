import React from "react";
import "../styles.css";
import questionsArray from "../questions";
const AnswerOptions = (props) => {
  const { index } = props;
  return (
    <div className="optionsStyle">
      {questionsArray[index].optionsArray.map((element) => (
        <div>
          <input key={element} type="radio" />
          <label htmlFor={element}>{element}</label>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
