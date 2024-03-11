import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = (props) => {
  const [percentage, setPercentage] = useState(0);

  // Effetto per calcolare e aggiornare la percentuale di completamento
  useEffect(() => {
    // Calcola il tempo totale in secondi e il tempo trascorso in secondi
    const totalTimeInSeconds = props.minutesValue * 60 + props.secondsValue;
    const elapsedTimeInSeconds =
      props.initialTotalSeconds -
      (props.minutesValue * 60 + props.secondsValue);
    // Calcola la percentuale di completamento
    const newPercentage =
      (elapsedTimeInSeconds / props.initialTotalSeconds) * 100;
    setPercentage(newPercentage);
  }, [props.minutesValue, props.secondsValue, props.initialTotalSeconds]);

  // Effetto per gestire il reset del timer
  useEffect(() => {
    if (props.resetTimer) {
      setPercentage(0);
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
          className="w-96 h-96 text-textColor font-petrona"
          value={percentage}
          text={`${formattedMinutes}:${formattedSeconds}`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: "#5EA9BE",
            textColor: "#222222",
            trailColor: "#d6d6d6",
            backgroundColor: "#5EA9BE",
          })}
        />
      </div>
    </section>
  );
};

export default Timer;
