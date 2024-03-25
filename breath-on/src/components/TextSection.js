import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import MoonLoading from "../assets/images/moon loading.svg";
import SunLoading from "../assets/images/sun loading.svg";

const TextSection = () => {
  const { darkMode } = useTheme();
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        {darkMode ? (
          <img src={MoonLoading} className="moon-loading" alt="Moon loading" />
        ) : (
          <img src={SunLoading} className="sun-loading" alt="Sun loading" />
        )}
      </div>

      <section
        className={`py-8 md:py-20 w-full absolute top-1/2 transform -translate-y-1/2 flex justify-center items-center z-10 ${
          darkMode ? "bg-darkSecondary" : "bg-[#FFD6CB]"
        }`}
      >
        <motion.div
          className="flex flex-col items-center justify-center "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={` font-petit-formal-script text-2xl md:text-3xl lg:text-4xl ${
              darkMode ? "text-darkTextColor2" : "text-textColor"
            }`}
          >
            <span> Take your </span>
            <TypeAnimation
              sequence={["Time", 1000, "Relax", 1000, "Space", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={`${darkMode ? "text-textColor" : "text-primary"}`}
            />
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default TextSection;
