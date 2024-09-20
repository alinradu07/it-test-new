import classes from "./Answer.module.css";
export default function Answer({ answers, onSelect }) {
  return (
    <ul>
      {answers.map((answer) => {
        return (
          <li className={classes.answer} key={answer}>
            <button onClick={() => onSelect(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
}
