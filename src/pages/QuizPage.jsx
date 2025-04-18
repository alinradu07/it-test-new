/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  const { quiz, discipline } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={quiz}>
        {(loadedQuiz) => (
          <Quiz questions={loadedQuiz} discipline={discipline} />
        )}
      </Await>
    </Suspense>
  );
}

async function loadQuiz(searchTerm) {
  console.log(searchTerm);
  const response = await fetch(`http://localhost:3001/${searchTerm}`);
  if (!response.ok) {
    return json({ message: "could not fetch quiz" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader({ request }) {
  console.log(request)
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("discipline");
  console.log(searchTerm)
  return defer({
    quiz: loadQuiz(searchTerm),
    discipline: searchTerm,
  });
}
