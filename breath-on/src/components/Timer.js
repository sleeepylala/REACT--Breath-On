import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "../context/ThemeContext";

const Timer = (props) => {
  const [percentage, setPercentage] = useState(100); // Inizia con la barra piena
  const { darkMode } = useTheme();

  // Effetto per calcolare e aggiornare la percentuale di completamento
  useEffect(() => {
    // Calcola il tempo totale in secondi e il tempo trascorso in secondi
    const totalTimeInSeconds = props.minutesValue * 60 + props.secondsValue;
    const elapsedTimeInSeconds =
      props.initialTotalSeconds -
      (props.minutesValue * 60 + props.secondsValue);
    // Calcola la percentuale di completamento
    const newPercentage =
      ((props.initialTotalSeconds - elapsedTimeInSeconds) /
        props.initialTotalSeconds) *
      100;
    setPercentage(newPercentage);
  }, [props.minutesValue, props.secondsValue, props.initialTotalSeconds]);

  // Effetto per gestire il reset del timer
  useEffect(() => {
    if (props.resetTimer) {
      setPercentage(100); // Riempie di nuovo la barra
      // Reimposta lo stato resetTimer a false dopo aver gestito il reset
      props.onResetTimerComplete();
    }
  }, [props.resetTimer, props.onResetTimerComplete]);

  // Funzione per formattare il numero aggiungendo uno zero se necessario
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  // Formattazione dei minuti e dei secondi
  const formattedMinutes = formatNumber(props.minutesValue);
  const formattedSeconds = formatNumber(props.secondsValue);

  return (
    <section>
      <div>
        <CircularProgressbar
          className="progress-bar w-96 h-96 text-textColor font-petrona mb-3 absolute xl:top-80  sm:top-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          value={percentage}
          text={`${formattedMinutes}:${formattedSeconds}`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.1,
            pathColor: darkMode ? "#FFDDD3" : "#5EA9BE",
            textColor: "#222222",
            trailColor: "none",
            backgroundColor: "#5EA9BE",
          })}
        />
      </div>
    </section>
  );
};

export default Timer;
