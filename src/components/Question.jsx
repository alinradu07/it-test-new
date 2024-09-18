import { CAN as can_questions } from "../assets/questions";
import Answer from "./Answer";

export default function Question({ index, onSelectAnswer }) {
    console.log('question render')
  function handleSelectAnswer(answer) {
    onSelectAnswer(answer);
  }
  return (
    <>
      <h2>{can_questions[index].text}</h2>
      <Answer
        onSelect={handleSelectAnswer}
        answers={[
          can_questions[index].right,
          can_questions[index].wrong1,
          can_questions[index].wrong2,
        ]}
      />
    </>
  );
}
