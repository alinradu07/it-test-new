// src/pages/CustomErrorPage.js
import { useNavigate } from "react-router-dom";

const CustomErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, something went wrong with the quiz. Please try again later.</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default CustomErrorPage;
