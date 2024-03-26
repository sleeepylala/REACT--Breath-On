import React, { useState, useEffect } from "react";
import ButtonTemplate from "./ButtonTemplate";
import Timer from "./Timer";
import ButtonSounds from "./ButtonSounds";
import ButtonMinutes from "./ButtonMinutes";
import ButtonTimer from "./ButtonTimer";
import TextSection from "./TextSection";
import Alert from "./Alert";
import Background from "../assets/images/sfondo.svg";
import BackgroundDark from "../assets/images/sfondodark.svg";
import FinishTimer from "../assets/sounds/timer-complete.mp3";
import { useTheme } from "../context/ThemeContext";

const TimerSection = () => {
  const { darkMode } = useTheme();

  // Stati del componente
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });
  const [initialTotalSeconds, setInitialTotalSeconds] = useState(0); // Stato per il tempo totale iniziale
  const [elapsedSeconds, setElapsedSeconds] = useState(0); // Stato per i secondi trascorsi
  const [isFinished, setIsFinished] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [loaderTime, setLoaderTime] = useState(3); // Tempo di caricamento iniziale
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [playedFinishSound, setPlayedFinishSound] = useState(false); // Stato per controllare se il suono di fine timer è già stato riprodotto
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effetto per il caricamento iniziale
  useEffect(() => {
    const timer = setInterval(() => {
      setLoaderTime((prevLoad) => {
        if (prevLoad === 0) {
          clearInterval(timer);
          setIsLoadingComplete(true);
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
    return () => clearInterval(interval);
  }, [isPlay]);

  // Effetto per gestire il reset del timer
  useEffect(() => {
    const totalSeconds = time.minutes * 60 + time.seconds;
    setInitialTotalSeconds(totalSeconds);
    setElapsedSeconds(0);
    setIsFinished(false);
    setPlayedFinishSound(false); // Resetta lo stato per il suono di fine timer quando il timer viene resettato
  }, [time]);

  // Effetto per controllare se il timer è terminato
  useEffect(() => {
    if (initialTotalSeconds - elapsedSeconds <= 0 && isPlay) {
      setIsFinished(true);
      setIsPlay(false);
      if (!playedFinishSound) {
        setPlayedFinishSound(true);
      }
    }
  }, [initialTotalSeconds, elapsedSeconds, isPlay, playedFinishSound]);

  // Funzione per gestire il clic del pulsante di riproduzione/pausa
  const handleButtonClick = () => {
    // Se il timer è già in esecuzione o non è stato impostato alcun intervallo, mostra l'alert
    if (!isPlay && time.minutes === 0 && time.seconds === 0) {
      setShowAlert(true);
      setShowOverlay(true);
      return;
    }
    setIsPlay(!isPlay);
  };

  // Effetto per la riproduzione del suono di fine timer
  useEffect(() => {
    if (playedFinishSound) {
      const finishTimerSound = new Audio(FinishTimer);
      finishTimerSound.play();
    }
  }, [playedFinishSound]);

  // Funzione per gestire il clic del pulsante di riavvio
  const handleRestartClick = () => {
    setIsPlay(false);
    setTime({ minutes: 0, seconds: 0 });
    setResetTimer(true);
  };

  // Funzioni per impostare la durata del timer in base alla categoria selezionata
  const addFiveMin = () => setTime({ minutes: 5, seconds: 0 });
  const addTenMin = () => setTime({ minutes: 10, seconds: 0 });
  const addFifteenMin = () => setTime({ minutes: 15, seconds: 0 });
  const toggleMind = () => setTime({ minutes: 20, seconds: 0 });
  const toggleRead = () => setTime({ minutes: 30, seconds: 0 });
  const toggleSleep = () => setTime({ minutes: 40, seconds: 0 });
  const toggleFocus = () => setTime({ minutes: 25, seconds: 0 });

  //blocco lo scroll quando c'è l'alert
  useEffect(() => {
    if (showAlert) {
      document.body.style.overflow = "hidden"; // Blocca lo scroll quando l'alert è aperto
    } else {
      document.body.style.overflow = "auto"; // Ripristina lo scroll quando l'alert è chiuso
    }

    return () => {
      document.body.style.overflow = "auto"; // Assicura che lo scroll venga ripristinato quando il componente viene smontato
    };
  }, [showAlert]);

  //effetto per vedere la grandezza schermo e togliere sfondo
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calcolo dei valori dei minuti e dei secondi
  const minutesValue = Math.floor((initialTotalSeconds - elapsedSeconds) / 60);
  const secondsValue = (initialTotalSeconds - elapsedSeconds) % 60;

  // Verifica se il caricamento è completo o meno per renderizzare la sezione corretta
  if (!isLoadingComplete) {
    return <TextSection />;
  }

  return (
    <>
      <section
        className="section-timer  flex flex-col relative"
        style={{
          backgroundImage:
            !isSmallScreen &&
            (darkMode ? `url(${BackgroundDark})` : `url(${Background})`),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <ButtonTemplate
          toggleMind={toggleMind}
          toggleRead={toggleRead}
          toggleSleep={toggleSleep}
          toggleFocus={toggleFocus}
        />

        <Timer
          secondsValue={secondsValue}
          minutesValue={minutesValue}
          initialTotalSeconds={initialTotalSeconds}
          isFinished={isFinished}
          resetTimer={resetTimer}
          onResetTimerComplete={() => setResetTimer(false)}
        />
        {showOverlay && <div className="overlay" />}
        {showAlert && (
          <Alert
            onClose={() => {
              setShowAlert(false);
              setShowOverlay(false);
            }}
          />
        )}
        <div className="container-timerbutton  flex justify-center space-x-24 mt-20 xl:mt-60 sm:mt-80">
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
    </>
  );
};

export default TimerSection;
