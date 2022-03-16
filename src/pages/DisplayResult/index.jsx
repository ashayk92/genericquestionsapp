import React from "react";
import questionsArray from "../../questions";
import { useSelector } from "react-redux";
const DisplayResult = () => {
  const usersArray = useSelector((state) => state.userArray);
  const correctAnswersArray = questionsArray.filter((element, index) => {
    let correctAnswer = "";
    if (element.answer === usersArray[index].answer) {
      correctAnswer = usersArray[index];
    }
    return correctAnswer;
  });

  console.log(correctAnswersArray.length);

  return <h1>Answers Array</h1>;
};

export default DisplayResult;
