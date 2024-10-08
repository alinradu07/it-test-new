import { forwardRef } from "react";
import { createPortal } from "react-dom";
import classes from "./InfoModal.module.css";
const InfoModal = forwardRef(function InfoModal(props,ref) {
  return createPortal(
    <dialog ref={ref} className={classes["info-modal"]}>
      <h1 className={classes.title}>IT-TEST</h1>
      <h2>Descriere</h2>
      <p className={classes.description}>
        IT-TEST este un proiect educativ care prezinta un set de intrebari grila
        cu surse, din domenul IT
      </p>
      <p className={classes.credits}>
        Made by <span className={classes["credits-name"]}>NOOBUN</span> and{" "}
        <span className={classes["credits-name"]}>alinradu07</span>
      </p>
      <form method="dialog">
        <button>Inchide</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default InfoModal;
