import React from "react";
import questionsArray from "../../questions";
import { useSelector } from "react-redux";
const AnswersTable = () => {
  const userAnswers = useSelector((state) => state.myReducer.userArray);
  return (
    <table>
      <tbody>
        <tr>
          <th>Question Number</th>
          <th>Correct Answer</th>
          <th>User Answer</th>
        </tr>
        {questionsArray.map((element, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.answer}</td>
              <td>
                <span
                  className={
                    element.answer === userAnswers[index].answer
                      ? "correctAnswerClass"
                      : "wrongAnswerClass"
                  }
                >
                  {userAnswers[index].answer}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AnswersTable;
