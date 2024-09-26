import { IconContext } from "react-icons";
import { FaCircleXmark } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import classes from "./Answer.module.css";

// className={`${classes.answer} ${classes[cssClass]}`}
// className={`${classes.answer} ${classes[cssClass]} ${
//   answerState ? `${classes.disabled}` : ""
// }`}
export default function Answer({
  answers,
  onSelect,
  answerState,
  selectedAnswer,
}) {
  return (
    <ul className={classes.answers}>
      {answers.map((answer) => {
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
