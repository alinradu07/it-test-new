import { CAN as can_questions } from "../assets/questions";
import { useState } from "react";
import Header from "./Header";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === can_questions.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  if (quizIsComplete) {
    return <h1>Quiz Complete</h1>;
  }
  return (
    <div id="quiz">
      <Header />
      <hr style={{ background: "#4d5376", height: "0.1px", border: 'none' }} />
      <Question
        // key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
