import QuestionImageModal from "./QuestionImageModal";
import { useState, forwardRef } from "react";
import { CAN as can_questions } from "../assets/questions";
import Answer from "./Answer";
import classes from "./Question.module.css";

const Question = forwardRef(function Question({ index, onSelectAnswer }, ref) {
  const [answer, setUserAnswer] = useState([
    {
      selectedAnswer: "",
      isCorrect: null,
    },
  ]);

  function handleSelectAnswer(answer) {
    setUserAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    ref.current.answer = answer;
    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: can_questions[index].right === answer,
      });
      onSelectAnswer();
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div className="question">
      <h2>{can_questions[index].text}</h2>
      {can_questions[index].material && (
        <div className={classes["questions-material"]}>
          <QuestionImageModal question={can_questions[index]} />
        </div>
      )}

      <Answer
        answerState={answerState}
        onSelect={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answers={[
          can_questions[index].right,
          can_questions[index].wrong1,
          can_questions[index].wrong2,
        ]}
      />
    </div>
  );
});
export default Question;
