import React from "react";
import GenericTable from "../../components/GenericTable";
import questionsArray from "../../questions";
class QuestionsList extends React.Component {
  render() {
    return <GenericTable arrayToRender={questionsArray} />;
  }
}

export default QuestionsList;
