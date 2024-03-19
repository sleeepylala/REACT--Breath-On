import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const TextSection = () => {
  const { darkMode } = useTheme();
  return (
    <div className=" h-screen flex justify-center items-center">
      <section
        className={`py-20 w-full ${
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
