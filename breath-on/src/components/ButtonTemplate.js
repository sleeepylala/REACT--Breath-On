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
      className="border rounded-full bg-white flex justify-center items-center h-28 w-28"
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="flex items-center  ">
          <span className=" text-textColor font-petrona text-2xl ">
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
