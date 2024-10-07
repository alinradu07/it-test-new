import { Link } from "react-router-dom";

export default function HomePage() {
  const data = { discipline: "python" };
  return (
    <>
      <h1>Home Page</h1>
      <p>Hello Home Page</p>
      <p>
        Go to <Link to={`/quiz?discipline=${data.discipline}`}>Quiz Page</Link>.
      </p>
    </>
  );
}
