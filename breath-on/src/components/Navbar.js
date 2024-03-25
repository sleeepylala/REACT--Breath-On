import React, { useEffect } from "react";
import { TbMoonFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logoDark.svg";
import { MdSunny } from "react-icons/md";

import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  // Funzione per passare da darkMode a lightMode o viceversa
  const switchDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Effetto per cambiare il colore dello sfondo del body in base al darkMode
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#3C8499" : "#FFDDD3";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [darkMode]);

  return (
    <nav
      className={`flex top-0 left-0 right-0 ${
        darkMode ? "bg-darkSecondary" : "bg-[#FFD6CB]"
      }`}
    >
      <div className="flex container m-auto  justify-between items-center py-7 px-5">
        <Link to="/">
          {darkMode ? (
            <img src={logoDark} className="logo-dark" alt="logo-dark" />
          ) : (
            <img src={logo} className="logo" alt="logo" />
          )}
        </Link>
        <button className="cursor-pointer" onClick={switchDarkMode}>
          {darkMode ? (
            <MdSunny className="h-8 w-8 text-darkTextColor2" />
          ) : (
            <TbMoonFilled className="h-8 w-8 text-primary" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
