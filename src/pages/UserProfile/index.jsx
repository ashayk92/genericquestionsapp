import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

function UserProfile() {
  let navigate = useNavigate();
  return (
    <div className="divStyle">
      <input
        type="text"
        id="fName"
        name="firstName"
        placeholder="Enter your name.."
      />
      <button
        className="buttonStyle"
        onClick={() => navigate("/questionsList")}
      >
        Start
      </button>
    </div>
  );
}

export default UserProfile;
