import React, { useState } from "react";
import { TbMoonFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="fixed flex border-gray-500 border-opacity-50 border-2 top-0 left-0 right-0 bg-[#FFD6CB]">
      <div className="flex container m-auto border-2 border-black justify-between items-center py-7 px-5">
        <Link to="/">
          <img src="./assets/images/logo.svg" alt="Logo" />
        </Link>
        <button onClick={toggleDarkTheme}>
          <TbMoonFilled className="h-8 w-8 text-primary" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
