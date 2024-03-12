import React, { useState, useEffect } from "react";
import ButtonTemplate from "./ButtonTemplate";
import Timer from "./Timer";
import ButtonSounds from "./ButtonSounds";
import ButtonMinutes from "./ButtonMinutes";
import ButtonTimer from "./ButtonTimer";
import TextSection from "./TextSection";

const TimerSection = () => {
  const buttonTemplateData1 = [
    { img: "../assets/images/focus.svg" },
    { img: "../assets/images/sleep.svg" },
  ];
  const buttonTemplateData2 = [
    { img: "../assets/images/mind.svg" },
    { img: "../assets/images/read.svg" },
  ];

  // Stati del componente
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [initialTotalSeconds, setInitialTotalSeconds] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [loaderTime, setLoaderTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoaderTime((prevLoad) => {
        console.log(prevLoad);
        if (prevLoad === 0) {
          clearInterval(timer);
        }
        return prevLoad - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Effetto per il conteggio del tempo
  useEffect(() => {
    let interval;
    if (isPlay) {
      // Avvia l'intervallo se il timer è in riproduzione
      interval = setInterval(() => {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, [isPlay]);

  // Effetto per gestire il reset del timer
  useEffect(() => {
    const totalSeconds = time.minutes * 60 + time.seconds;
    setInitialTotalSeconds(totalSeconds);
    setElapsedSeconds(0);
    setIsFinished(false);
  }, [time]);

  // Effetto per controllare se il timer è terminato

  useEffect(() => {
    if (initialTotalSeconds - elapsedSeconds <= 0) {
      setIsFinished(true);
      setIsPlay(false);
    }
  }, [initialTotalSeconds, elapsedSeconds]);

  // Funzione per gestire il clic del pulsante di riproduzione/pausa
  const handleButtonClick = () => {
    // Se il timer è già in esecuzione o non è stato impostato alcun intervallo, non fare nulla
    if (!isPlay && time.minutes === 0 && time.seconds === 0) {
      return;
    }
    setIsPlay(!isPlay);
  };

  // Funzione per gestire il clic del pulsante di riavvio
  const handleRestartClick = () => {
    setIsPlay(false);
    setTime({ minutes: 0, seconds: 0 });
    setResetTimer(true);
  };

  const addFiveMin = () => setTime({ minutes: 5, seconds: 0 });
  const addTenMin = () => setTime({ minutes: 10, seconds: 0 });
  const addFifteenMin = () => setTime({ minutes: 15, seconds: 0 });

  // Calcolo dei valori dei minuti e dei secondi
  const minutesValue = Math.floor((initialTotalSeconds - elapsedSeconds) / 60);
  const secondsValue = (initialTotalSeconds - elapsedSeconds) % 60;

  return (
    <>
      {loaderTime <= 0 ? (
        <section className="section-timer border-2 border-red-900 flex flex-col  relative">
          <div className="flex border-2 border-blue-900 justify-center items-center sm:space-x-10 space-x-20 xl:space-x-60">
            {buttonTemplateData1.map((item, index) => (
              <ButtonTemplate
                key={index}
                img={item.img}
                onChange={item.onChange}
              />
            ))}
          </div>
          <div className="flex justify-around xl:space-x-40 sm:space-x-16 ">
            {buttonTemplateData2.map((item, index) => (
              <ButtonTemplate key={index} img={item.img} />
            ))}
          </div>

          <Timer
            secondsValue={secondsValue}
            minutesValue={minutesValue}
            initialTotalSeconds={initialTotalSeconds}
            isFinished={isFinished}
            resetTimer={resetTimer}
            onResetTimerComplete={() => setResetTimer(false)}
          />

          <div className="container-timerbutton border-2  border-orange-700 flex justify-center space-x-24 mt-56 xl:mt-80 sm:mt-96">
            <ButtonTimer
              img={isPlay ? "pause" : "play"}
              onChange={handleButtonClick}
            />
            <ButtonTimer img="restart" onChange={handleRestartClick} />
          </div>
          <div className="grid md:flex md:flex-row md:justify-center md:space-x-10 my-10">
            <ButtonMinutes
              addFiveMin={addFiveMin}
              addTenMin={addTenMin}
              addFifteenMin={addFifteenMin}
            />
          </div>
          <ButtonSounds />
        </section>
      ) : (
        <TextSection />
      )}
    </>
  );
};

export default TimerSection;
