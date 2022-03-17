import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);

  const submitHandler = (event) => {
    if (!userName) {
      event.preventDefault();
    } else {
      //localStorage.setItem("currentUser", userName);
      dispatch({ type: "setUser", value: userName });
      navigate("/questionsList");
    }
  };
  return (
    <form className="divStyle" onSubmit={submitHandler}>
      <input
        type="text"
        id="fName"
        name="firstName"
        placeholder="Enter your name.."
        onChange={(event) => setUserName(event.target.value)}
      />
      {userName === "" ? (
        <span className="marginClass">*Username is required</span>
      ) : (
        <></>
      )}
      <button type="submit" className="buttonStyle">
        Start
      </button>
    </form>
  );
}

export default UserProfile;
