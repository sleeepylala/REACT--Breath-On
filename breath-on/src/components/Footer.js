import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  return (
    <footer
      className={`footer ${darkMode ? "bg-darkSecondary" : "bg-[#FFD6CB]"}`}
    >
      <div className="flex h-20 text-lg items-center justify-center text-textColor font-petrona">
        <p className="text-textColor">Created by Ilaria Ferrauti © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
