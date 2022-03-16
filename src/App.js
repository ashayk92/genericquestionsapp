import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuestionsList from "./pages/QuestionsList";
import UserProfile from "./pages/UserProfile";
import DisplayResult from "./pages/DisplayResult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="questionsList" element={<QuestionsList />} />
        <Route path="displayResult" element={<DisplayResult />} />
      </Routes>
    </div>
  );
}

export default App;
