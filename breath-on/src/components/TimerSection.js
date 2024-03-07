import React from "react";
import ButtonTemplate from "./ButtonTemplate";
import Timer from "./Timer";

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
    <section className="border-2 border-red-900 flex flex-col mt-24">
      <div className="flex border-2 border-blue-900 justify-center items-center space-x-20 ">
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
      <div className="flex justify-around ">
        {buttonTemplateData2.map((item, index) => {
          return <ButtonTemplate key={index} img={item.img} />;
        })}
      </div>
      <div className="container-timer border-2 border border-orange-700 flex justify-center">
        <Timer />
      </div>
    </section>
  );
};

export default TimerSection;
