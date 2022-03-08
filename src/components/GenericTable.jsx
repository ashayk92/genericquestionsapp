import React from "react";

const GenericTable = (props) => {
  const { arrayToRender } = props;
  return arrayToRender.map((element) => {
    return <h3 key={element.question}>{element.question}</h3>;
  });
};

export default GenericTable;
