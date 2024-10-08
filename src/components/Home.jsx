import classes from "./Home.module.css";
import SelectTest from "./Select.jsx";

import { useNavigate } from "react-router-dom";

import { DISCIPLINES } from "../assets/questions.js";
import { NUMBERS } from "../assets/questions.js";
import { LEVELS } from "../assets/questions.js";

import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [selectedQuestionsNumber, setSelectedQuestionsNumber] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  function handleDiscipline(selectedOption) {
    setSelectedDiscipline(selectedOption);
  }
  function handleQuestions(selectedOption) {
    setSelectedQuestionsNumber(selectedOption);
  }
  function handleLevel(selectedOption) {
    setSelectedLevel(selectedOption);
  }
  function startTestHandle() {
    const selection = {
      discipline: selectedDiscipline.value,
      number: selectedQuestionsNumber.value,
      level: selectedLevel.value,
    };
    const { discipline, number, level } = selection;
    navigate(
      `/quiz?discipline=${discipline}&questions=${number}&leve=${level}`
    );
  }
  let buttonIsDisabled = true;
  if (selectedDiscipline && selectedQuestionsNumber && selectedLevel)
    buttonIsDisabled = false;
  return (
    <div className={classes["test-layout"]}>
      <div className={classes.content}>
        <header className={classes.header}>
          <h1>Alege testul dorit</h1>
        </header>
        <section className={classes.dropdown}>
          <SelectTest
            placeholder="Disciplina"
            options={DISCIPLINES}
            defaultValue={selectedDiscipline}
            onChange={handleDiscipline}
          />
          <SelectTest
            placeholder="Numar"
            options={NUMBERS}
            defaultValue={selectedQuestionsNumber}
            onChange={handleQuestions}
          />
          <SelectTest
            placeholder="Nivel"
            options={LEVELS}
            defaultValue={selectedLevel}
            onChange={handleLevel}
          />
        </section>
        <section className={classes.bottom}>
          <button
            onClick={startTestHandle}
            disabled={buttonIsDisabled}
          >
            Start
          </button>
        </section>
      </div>
    </div>
  );
}
