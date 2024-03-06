import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 border-2 border-blue-900 ">
        <div className="col-span-6 flex flex-col justify-center items-center ">
          <h1 className="text-colorText text-center font-petit-formal-script text-3xl md:text-4xl lg:text-6xl">
            Take a breath <br /> and ease your mind
          </h1>
          <button className="mt-16 flex items-center text-textColor font-petrona text-1xl lg:text-2xl sm:text-xl border rounded-xl bg-white px-6 py-2">
            get started
            <FaArrowRight className="text-primary ms-7" />
          </button>
        </div>

        <div className="col-span-6">
          <img src="./assets/images/hero-img.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Home;
