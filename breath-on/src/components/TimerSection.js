// TimerSection.jsx
import React, { useState, useRef, useEffect } from "react";
import ButtonTemplate from "./ButtonTemplate";
import Timer from "./Timer";
import ButtonSounds from "./ButtonSounds";
import ButtonMinutes from "./ButtonMinutes";
import ButtonTimer from "./ButtonTimer";

const TimerSection = () => {
  const buttonTemplateData1 = [
    { img: "../assets/images/focus.svg" },
    { img: "../assets/images/sleep.svg" },
  ];
  const buttonTemplateData2 = [
    { img: "../assets/images/mind.svg" },
    { img: "../assets/images/read.svg" },
  ];

  // Stato per il pulsante di play/pausa
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  // Gestore dell'incrementare e fermare timer
  useEffect(() => {
    let interval;
    if (isPlay) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds === 59) {
            return { minutes: prevTime.minutes + 1, seconds: 0 };
          } else {
            return { ...prevTime, seconds: prevTime.seconds + 1 };
          }
        });
      }, 100);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlay]);

  const handleButtonClick = () => {
    setIsPlay(!isPlay);
  };

  // Gestore del clic del pulsante restart
  const handleRestartClick = () => {
    setIsPlay(false);
    setTime({
      minutes: 0,
      seconds: 0,
    });
  };

  return (
    <section className="section-timer border-2 border-red-900 flex flex-col mt-24 ">
      <div className="flex border-2 border-blue-900 justify-center items-center sm:space-x-10 space-x-20 xl:space-x-60">
        {buttonTemplateData1.map((item, index) => (
          <ButtonTemplate key={index} img={item.img} onChange={item.onChange} />
        ))}
      </div>
      <div className="flex justify-around xl:space-x-40 sm:space-x-16">
        {buttonTemplateData2.map((item, index) => (
          <ButtonTemplate key={index} img={item.img} />
        ))}
      </div>
      <div className="container-timer border-2  border-orange-700 flex justify-center">
        <Timer secondsValue={time.seconds} minutesValue={time.minutes} />
      </div>
      <div className="container-timer border-2  border-orange-700 flex justify-center">
        <ButtonTimer
          img={isPlay ? "pause" : "play"}
          onChange={handleButtonClick}
        />
        <ButtonTimer img="restart" onChange={handleRestartClick} />
      </div>
      <div className="grid md:flex md:flex-row  md:justify-center md:space-x-10 my-24">
        <ButtonMinutes />
      </div>
      <ButtonSounds />
    </section>
  );
};

export default TimerSection;
