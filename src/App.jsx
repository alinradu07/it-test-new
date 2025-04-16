import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CustomErrorPage from "./pages/CustomErrorPage";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import QuizPage, { loader as quizLoader } from "./pages/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
        loader: quizLoader,
        errorElement: <CustomErrorPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
