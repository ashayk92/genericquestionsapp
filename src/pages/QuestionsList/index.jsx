import React from "react";
import AnswerOptions from "../../components/AnswerOptions";
import GenericTable from "../../components/GenericTable";
import Timer from "../../components/Timer";
import "../../styles.css";
class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, resetTimer: 300 };
  }
  submitHandler() {
    console.log("inside submit handler");
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <>
        <Timer
          index={this.state.counter}
          expiryTimeStamp={this.state.resetTimer}
        />
        <div className="divStyle">
          <GenericTable index={this.state.counter} />
          <AnswerOptions index={this.state.counter} />
          {this.state.counter < 9 ? (
            <button
              className="buttonStyle"
              onClick={() => this.submitHandler()}
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

export default QuestionsList;
