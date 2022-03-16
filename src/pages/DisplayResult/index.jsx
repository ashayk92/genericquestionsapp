import React from "react";
import questionsArray from "../../questions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import GeneratePieChart from "../../components/GeneratePieChart";

const DisplayResult = () => {
  const navigate = useNavigate();
  const usersArray = useSelector((state) => state.userArray);
  const correctAnswersArray = questionsArray.filter((element, index) => {
    let correctAnswer = "";
    if (element.answer === usersArray[index].answer) {
      correctAnswer = usersArray[index];
    }
    return correctAnswer;
  });
  const correctPercentage =
    (correctAnswersArray.length / questionsArray.length) * 100;
  const wrongPercentage = 100 - correctPercentage;

  const chartClickEvent = () => {
    navigate("/displayTable");
  };
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: { text: "Result" },

    data: [
      {
        type: "pie",
        startAngle: 90,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          {
            y: correctPercentage,
            label: "Correct",
            onclick,
            click: chartClickEvent,
          },
          { y: wrongPercentage, label: "Wrong", click: chartClickEvent },
        ],
      },
    ],
  };

  return <GeneratePieChart options={options} />;
};

export default DisplayResult;
