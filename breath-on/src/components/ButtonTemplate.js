import React, { useState } from "react";

const ButtonTemplate = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [putBg, setPutBg] = useState("#fff");
  const [opacity, setOpacity] = useState(0);

  const handleMouseEnter = () => {
    setIsHover(true);
    setPutBg("#5EA9BE");
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setPutBg("#fff");
    setOpacity(0);
  };

  return (
    <button
      className="border rounded-full bg-white flex justify-center items-center h-28 w-28"
      style={{
        backgroundColor: isHover ? putBg : "#fff",
        transition: "background-color 0.8s ease, opacity 1s ease",
      }}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="flex items-center  ">
          <span
            className=" text-textColor font-petrona text-2xl 
          "
            style={{ opacity: opacity }}
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
