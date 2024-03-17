import React, { useState } from "react";

const ButtonTemplate = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const playSound = () => {
    const audio = new Audio(props.sound);
    audio.loop = true;
    audio.play();
  };

  return (
    <button
      className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28 shadow-md"
      style={{
        backgroundColor: isHover ? "#5EA9BE" : "#fff",
        transition: "background-color 0.8s ease, opacity 1s ease",
      }}
      onClick={() => {
        playSound();
        props.toggleFunction();
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="flex items-center  ">
          <span
            className=" text-white  font-petrona text-2xl 
          "
          >
            {props.value}
          </span>
        </div>
      ) : (
        <img src={props.img} alt="icon-button" />
      )}
    </button>
  );
};

export default ButtonTemplate;
