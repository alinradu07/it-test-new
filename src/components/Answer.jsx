export default function Answer({ answers, onSelect }) {
  return (
    <ul>
      {answers.map((answer) => (
        <li key={answer}>
          <button onClick={() => onSelect(answer)}>{answer}</button>
        </li>
      ))}
    </ul>
  );
}
