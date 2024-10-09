import itLogo from "../assets/vite.svg";
import classes from "./Header.module.css";
export default function Header({
  quizLength,
  questionIndex,
  selectedDiscipline,
}) {
  const questionProgress = (questionIndex / quizLength) * 100;
  return (
    <div className={`header_padding ${classes.header}`}>
      <p>
        <img src={itLogo} />
        {selectedDiscipline.toUpperCase()}-TEST
      </p>
      <div>
        <p className={classes["progress-text"]}>
          Total Progress:
          <span>{questionProgress}% completed</span>
        </p>
        <progress value={questionProgress} max="100"></progress>
      </div>
    </div>
  );
}
