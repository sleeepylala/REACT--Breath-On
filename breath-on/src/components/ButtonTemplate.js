import React, { useState } from "react";

const ButtonTemplate = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28"
      style={{
        backgroundColor: isHover ? "#5EA9BE" : "#fff",
        transition: "background-color 0.8s ease, opacity 1s ease",
      }}
      onClick={props.onClick}
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
