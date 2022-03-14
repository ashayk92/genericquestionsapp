import "./App.css";
import { Routes, Route } from "react-router-dom";

import QuestionsList from "./pages/QuestionsList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="questionsList" element={<QuestionsList />} />
      </Routes>
    </div>
  );
}

export default App;
