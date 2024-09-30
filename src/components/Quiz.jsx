import { CAN as can_questions } from "../assets/questions";
import { useState, useRef } from "react";
import Header from "./Header";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const answerRef = useRef({ answer: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizQuestionLength = can_questions.length;
  const leftAnswers = quizQuestionLength - activeQuestionIndex;
  const quizIsComplete = activeQuestionIndex === quizQuestionLength;
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
    return <Summary userAnswers={userAnswers} />;
  }
  return (
    <div id="quiz">
      <Header
        quizLength={quizQuestionLength}
        questionIndex={activeQuestionIndex}
      />
      <hr style={{ background: "#4d5376", height: "1px", border: "none" }} />
      <div className="question-info">
        <p>
          {leftAnswers} {leftAnswers > 1 ? "ANSWERS" : "ANSWER"} LEFT
        </p>
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
