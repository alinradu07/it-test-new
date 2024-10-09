import { useState, useRef } from "react";
import Header from "./Header";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz({ questions, discipline }) {
  const answerRef = useRef({ answer: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizQuestionLength = questions.length;
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
    return <Summary userAnswers={userAnswers} questions={questions} />;
  }
  return (
    <div id="quiz">
      <Header
        selectedDiscipline={discipline}
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
        questions={questions}
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
