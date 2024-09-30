import classes from "./Header.module.css";
export default function Header({ quizLength, questionIndex }) {
  const questionProgress = (questionIndex / quizLength) * 100;
  return (
    <div className={`header_padding ${classes.header}`}>
      <p>IT-TEST</p>
      <div>
        <p>
          Total Progress:{" "}
          <span className="completed-text">{questionProgress}% completed</span>
        </p>
        <progress value={questionProgress} max="100"></progress>
      </div>
    </div>
  );
}
