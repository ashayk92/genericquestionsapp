import React from "react";
import questionsArray from "../questions";
const GenericTable = (props) => {
  const { index } = props;

  return (
    <h3 key={questionsArray[index].question}>
      {questionsArray[index].question}
    </h3>
  );
};

export default GenericTable;
