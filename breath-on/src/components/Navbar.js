import React, { useState } from "react";
import { TbMoonFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logoDark.svg";
import { MdSunny } from "react-icons/md";

import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  const switchDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <nav
      className={`flex border-gray-500 border-opacity-50 border-2 top-0 left-0 right-0 ${
        darkMode ? "bg-darkSecondary" : "bg-[#FFD6CB]"
      }`}
    >
      <div className="flex container m-auto border-2 border-black justify-between items-center py-7 px-5">
        <Link to="/">
          {darkMode ? <img src={logoDark} /> : <img src={logo} />}
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
