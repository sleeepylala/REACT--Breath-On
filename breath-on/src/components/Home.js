import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero-img.svg";
import heroDark from "../assets/images/hero-img-dark.svg";
import { useTheme } from "../context/ThemeContext";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <section className="py-16 section-home">
      <div
        className={`grid grid-cols-1 sm:grid-cols-12 ${
          darkMode ? "bg-darkPrimary" : "bg-secondary"
        }`}
      >
        <div className="col-span-6 flex flex-col justify-center items-center">
          <h1
            className={`text-center font-petit-formal-script text-3xl md:text-4xl lg:text-6xl ${
              darkMode ? "text-darkTextColor2" : "text-textColor"
            }`}
          >
            Take a breath <br /> and ease your mind
          </h1>

          <Link
            to="/timer"
            className="mt-16 flex items-center text-textColor font-petrona text-1xl lg:text-2xl sm:text-xl border rounded-xl bg-white px-6 py-2 relative overflow-hidden"
          >
            <span className="mr-2">get</span>
            <TypeAnimation
              sequence={["started", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={"text-primary"}
            />
            <FaArrowRight className="text-primary ms-6" />
          </Link>
        </div>

        <div className="col-span-6 pt-10">
          <img src={darkMode ? heroDark : hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};
export default Home;
