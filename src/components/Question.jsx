import QuestionImageModal from "./QuestionImageModal";
import { useState, forwardRef } from "react";
import Answer from "./Answer";
import classes from "./Question.module.css";

const Question = forwardRef(function Question(
  { index, onSelectAnswer, questions },
  ref
) {
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
        isCorrect: questions[index].right === answer,
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
      <h2>{questions[index].text}</h2>
      {questions[index].material && (
        <div className={classes["questions-material"]}>
          <QuestionImageModal question={questions[index]} />
        </div>
      )}

      <Answer
        answerState={answerState}
        onSelect={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answers={[
          questions[index].right,
          questions[index].wrong1,
          questions[index].wrong2,
        ]}
      />
    </div>
  );
});
export default Question;
