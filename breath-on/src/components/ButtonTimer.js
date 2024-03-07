import React, { useState } from "react";

const ButtonTimer = (props) => {
  const imagesButtonTimer = [
    { img: "../assets/images/restart.svg" },
    { img: "../assets/images/play.svg" },
    { img: "../assets/images/pause.svg" },
  ];
  const [isPlay, setIsPlay] = useState(false);
  return (
    <>
      {imagesButtonTimer.map((item, index) => {
        return (
          <button
            key={index}
            className="border rounded-full bg-primary flex items-center justify-center w-14 h-14"
          >
            <img src={item.img} />
          </button>
        );
      })}
    </>
  );
};

export default ButtonTimer;
