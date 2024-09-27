import { IconContext } from "react-icons";
import { FaCircleXmark } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useRef } from "react";
import classes from "./Answer.module.css";

export default function Answer({
  answers,
  onSelect,
  answerState,
  selectedAnswer,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul className={classes.answers}>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        let component = <div className={classes.circle}></div>;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
          component = <div className={classes.circle}></div>;
        }
        if (answerState === "answered" && !isSelected) {
          cssClass = "not-selected";
          component = <div className={classes.circle}></div>;
        }

        if (answerState === "correct" && isSelected) {
          cssClass = answerState;
          component = (
            <IconContext.Provider
              value={{
                // color: "#00f5f7",
                className: classes["correct-mark"],
              }}
            >
              <IoMdCheckmarkCircle />
            </IconContext.Provider>
          );
        }
        if (answerState === "wrong" && isSelected) {
          cssClass = answerState;
          component = (
            <IconContext.Provider
              value={{
                className: classes["wrong-mark"],
              }}
            >
              <FaCircleXmark />
            </IconContext.Provider>
          );
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          !isSelected
        ) {
          cssClass = "not-selected";
          component = <div className={classes.circle}></div>;
        }
        return (
          <li key={answer} className={classes.answer}>
            <button
              className={`${classes[cssClass]}`}
              disabled={answerState}
              onClick={() => onSelect(answer)}
            >
              {component}
              <p className={classes.text}>{answer}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
