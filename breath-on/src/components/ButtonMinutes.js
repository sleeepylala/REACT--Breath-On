import React from "react";

const ButtonMinutes = (props) => {
  const buttonMinutesdata = [
    { title: "5 minutes", value: 5 },
    { title: "10 minutes", value: 10 },
    { title: "15 minutes", value: 15 },
  ];
  return (
    <>
      {buttonMinutesdata.map((item, index) => {
        return (
          <button
            key={index}
            className="border-4 rounded-xl border-primary text-textColor font-petrona text-1xl lg:text-2xl sm:text-xl  px-10 py-2 mb-2 lg:mb-0"
            onClick={props.onClick}
          >
            {item.title}
          </button>
        );
      })}
    </>
  );
};

export default ButtonMinutes;
