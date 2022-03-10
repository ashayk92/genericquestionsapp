import React from "react";
import AnswerOptions from "../../components/AnswerOptions";
import GenericTable from "../../components/GenericTable";
import "../../styles.css";
class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  submitHandler() {
    console.log("inside submit handler");
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div className="divStyle">
        <GenericTable index={this.state.counter} />
        <AnswerOptions index={this.state.counter} />
        <button className="buttonStyle" onClick={() => this.submitHandler()}>
          Submit
        </button>
      </div>
    );
  }
}

export default QuestionsList;
