import { CAN as can_questions } from "../assets/questions";
import { useState, useRef } from "react";
import Header from "./Header";
import Question from "./Question";

export default function Quiz() {
  const answerRef = useRef({ answer: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === can_questions.length;
  function handleSelectAnswer() {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answerRef.current.answer];
    });
    setIsDisabled(true);
  }

  function handleDisable() {
    setIsDisabled(false);
  }

  if (quizIsComplete) {
    return <h1>Quiz Complete</h1>;
  }
  return (
    <div id="quiz">
      <Header />
      <hr style={{ background: "#4d5376", height: "1px", border: "none" }} />
      <div className="question-info">
        <p>6 ANSWERS LEFT</p>
      </div>
      <Question
        ref={answerRef}
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleDisable}
      />
      <button
        disabled={isDisabled}
        className="next-question"
        onClick={handleSelectAnswer}
      >
        Next Question
      </button>
    </div>
  );
}
