import React from "react";
import ButtonTemplate from "./ButtonTemplate";
import Timer from "./Timer";
import ButtonSounds from "./ButtonSounds";
import ButtonMinutes from "./ButtonMinutes";

const TimerSection = () => {
  const buttonTemplateData1 = [
    { img: "../assets/images/focus.svg" },
    { img: "../assets/images/sleep.svg" },
  ];
  const buttonTemplateData2 = [
    { img: "../assets/images/mind.svg" },

    { img: "../assets/images/read.svg" },
  ];

  return (
    <section className="section-timer border-2 border-red-900 flex flex-col mt-24 ">
      <div className="flex border-2 border-blue-900 justify-center items-center sm:space-x-10 space-x-20 xl:space-x-60">
        {buttonTemplateData1.map((item, index) => {
          return (
            <ButtonTemplate
              key={index}
              img={item.img}
              onChange={item.onChange}
            />
          );
        })}
      </div>
      <div className="flex justify-around xl:space-x-40 sm:space-x-16">
        {buttonTemplateData2.map((item, index) => {
          return <ButtonTemplate key={index} img={item.img} />;
        })}
      </div>
      <div className="container-timer border-2  border-orange-700 flex justify-center">
        <Timer />
      </div>
      <div className="grid md:flex md:flex-row  md:justify-center md:space-x-10">
        <ButtonMinutes />
      </div>

      <ButtonSounds />
    </section>
  );
};

export default TimerSection;
