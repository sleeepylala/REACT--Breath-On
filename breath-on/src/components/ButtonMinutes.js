import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ButtonMinutes = (props) => {
  const { darkMode } = useTheme();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttonMinutesdata = [
    { title: "5 minutes", onClick: props.addFiveMin },
    { title: "10 minutes", onClick: props.addTenMin },
    { title: "15 minutes", onClick: props.addFifteenMin },
  ];
  return (
    <>
      {buttonMinutesdata.map((item, index) => {
        return (
          <button
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="border-4 rounded-xl border-primary text-textColor font-petrona text-1xl lg:text-2xl sm:text-xl  px-10 py-2 mb-2 lg:mb-0"
            style={{
              background: hoveredButton === index ? "#5EA9BE" : "none",
              color:
                hoveredButton === index
                  ? "#FFFFFF"
                  : darkMode
                  ? "#FFFFFF"
                  : "#222222",
              borderColor: darkMode ? "#FFDDD3" : "#5EA9BE",
            }}
            onClick={item.onClick}
          >
            {item.title}
          </button>
        );
      })}
    </>
  );
};

export default ButtonMinutes;
