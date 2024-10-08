/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  const { quiz } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={quiz}>
        {(loadedQuiz) => <Quiz questions={loadedQuiz} />}
      </Await>
    </Suspense>
  );
}

async function loadQuiz(searchTerm) {
  const response = await fetch(`http://192.168.1.142:3001/${searchTerm}`);
  if (!response.ok) {
    return json({ message: "could not fetch quiz" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("discipline");
  return defer({
    quiz: loadQuiz(searchTerm),
  });
}
