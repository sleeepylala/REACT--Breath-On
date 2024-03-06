import React from "react";
import { TbMoonFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="fixed border-gray-500 border-opacity-50 border-2 top-0 left-0 right-0">
      <div className="flex container border-2 border-black justify-around items-center">
        <img src="./assets/images/logo.svg" />
        <TbMoonFilled className="h-7 w-7" />
      </div>
    </nav>
  );
};

export default Navbar;
