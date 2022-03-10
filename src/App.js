import "./App.css";
import Timer from "./components/Timer";
import QuestionsList from "./pages/QuestionsList";

function App() {
  return (
    <div className="App">
      <Timer />
      <QuestionsList />
    </div>
  );
}

export default App;
