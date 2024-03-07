import React from "react";

const ButtonTemplate = (props) => {
  return (
    <button
      className="border rounded-full bg-white flex justify-center items-center h-28 w-28"
      onClick={props.onClick}
    >
      <img src={props.img} alt="icon-button" />
    </button>
  );
};

export default ButtonTemplate;
