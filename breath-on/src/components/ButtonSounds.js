import React from "react";

const ButtonSounds = (props) => {
  return (
    <div className="flex items-center flex-col py-7 ">
      <button
        className="border rounded-full bg-white flex items-center justify-center  sm:w-16 sm:h-16 xl:h-20 xl:w-20"
        onClick={props.onClick}
      >
        <img src={props.img} alt="iconsounds-button" />
      </button>
      <p className="text-textColor font-petrona xl:text-xl">{props.title}</p>
    </div>
  );
};

export default ButtonSounds;
