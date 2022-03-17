import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionsList from "./pages/QuestionsList";
import UserProfile from "./pages/UserProfile";
import DisplayResult from "./pages/DisplayResult";
import AnswersTable from "./pages/AnswersTable";
import SessionComponent from "./components/SessionComponent";

function App() {
  const userName = useSelector((state) => state.userReducer.userName);

  return (
    <div className="App">
      {!userName ? <></> : <SessionComponent />}
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="questionsList" element={<QuestionsList />} />
        <Route path="displayResult" element={<DisplayResult />} />
        <Route path="displayTable" element={<AnswersTable />} />
      </Routes>
    </div>
  );
}

export default App;
