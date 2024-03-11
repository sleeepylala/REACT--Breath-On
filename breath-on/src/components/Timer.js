import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = (props) => {
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
          value={props.secondsValue}
          text={`${formattedMinutes}:${formattedSeconds}`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Colors
            pathColor: `rgba(62, 152, 199)`,
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
