import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

function UserProfile() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  const submitHandler = (event) => {
    if (!userName) {
      event.preventDefault();
    } else {
      localStorage.setItem("currentUser", userName);
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
