// ButtonTimer.jsx
import React from "react";
import playImage from "../assets/images/play.svg";
import pauseImage from "../assets/images/pause.svg";
import restartImage from "../assets/images/restart.svg";

const ButtonTimer = ({ img, onChange }) => {
  let imageSrc;
  let altText;

  switch (img) {
    case "play":
      imageSrc = playImage;
      altText = "Play";
      break;
    case "pause":
      imageSrc = pauseImage;
      altText = "Pause";
      break;
    case "restart":
      imageSrc = restartImage;
      altText = "Restart";
      break;
    default:
      imageSrc = null;
      altText = "";
      break;
  }

  return (
    <button
      className="border rounded-full bg-primary flex items-center justify-center w-14 h-14"
      onClick={onChange}
    >
      {imageSrc && <img src={imageSrc} alt={altText} />}
    </button>
  );
};

export default ButtonTimer;
