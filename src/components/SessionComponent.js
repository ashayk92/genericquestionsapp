import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const SessionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("User logged in");

  setTimeout(() => {
    navigate("/");
    dispatch({ type: "setUser", value: "" });
    dispatch({ type: "resetData", value: [] });
  }, 60 * 60 * 1000);
  return <></>;
};

export default SessionComponent;
