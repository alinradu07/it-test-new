import { useState } from "react";
import { CAN as can_questions } from "../assets/questions";
import Answer from "./Answer";
// import classes from "./Question.module.css";

export default function Question({ index }) {
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
    // onSelectAnswer(answer);
    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: can_questions[index].right === answer,
      });
    }, 2000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  console.log(answerState);

  return (
    <div className="question">
      <h2>{can_questions[index].text}</h2>
      <Answer
        answerState={answerState}
        onSelect={handleSelectAnswer}
        answers={[
          can_questions[index].right,
          can_questions[index].wrong1,
          can_questions[index].wrong2,
        ]}
      />
    </div>
  );
}
