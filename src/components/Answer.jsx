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
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (answerState === "answered" && !isSelected) {
          cssClass = "not-selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          !isSelected
        ) {
          cssClass = "not-selected";
        }
        return (
          <li key={answer} className={classes.answer}>
            <button
              className={`${classes[cssClass]}`}
              disabled={answerState}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
