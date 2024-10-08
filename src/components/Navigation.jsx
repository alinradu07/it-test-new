import { NavLink } from "react-router-dom";
import { useRef } from "react";
import InfoModal from "./InfoModal";

import itLogo from "/favicon.ico";
import { IconContext } from "react-icons";
import { FiInfo } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const dialog = useRef();

  function onShowModalInfo() {
    dialog.current.showModal();
  }

  return (
    <>
      <InfoModal ref={dialog} />
      <header className={classes.header}>
        <nav className={classes.navigation}>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                <div className={`${classes["our-website"]}`}>
                  <img
                    src={itLogo}
                    className={`${classes.logo}`}
                    alt="it-test logo"
                  />
                  <p>IT-TEST</p>
                </div>
              </NavLink>
            </li>
          </ul>
          <ul className={classes.list}>
            <div className={`${classes["menu-items"]}`}>
              <li onClick={onShowModalInfo}>
                <IconContext.Provider
                  value={{
                    size: "2.4rem",
                  }}
                >
                  <FiInfo />
                </IconContext.Provider>
              </li>
              <li>
                <IconContext.Provider
                  value={{
                    size: "2.4rem",
                  }}
                >
                  <a href="mailto: contact@it-test.ro">
                    <MdOutlineMailOutline />
                  </a>
                </IconContext.Provider>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
