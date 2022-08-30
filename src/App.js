import { MainMenu, Quiz, EndQuiz } from "./component/index";
import "./App.css";
import { useState } from "react";
import {Context} from "./helpers/Context";

function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Context.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "end" && <EndQuiz />}
      </Context.Provider>
    </div>
  );
}

export default App;
