import React from "react";

const ButtonSounds = (props) => {
  return (
    <div className="flex items-center flex-col">
      <button
        className="border rounded-full bg-white flex items-center justify-center h-16 w-16 flex-col"
        onClick={props.onClick}
      >
        <img src={props.img} alt="iconsounds-button" />
      </button>
      <p className="">{props.title}</p>
    </div>
  );
};

export default ButtonSounds;
