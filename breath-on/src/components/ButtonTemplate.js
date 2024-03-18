import React, { useState } from "react";
import { buttonTemplateData1, buttonTemplateData2 } from "../assets/icons";

const ButtonTemplate = ({
  toggleMind,
  toggleRead,
  toggleSleep,
  toggleFocus,
}) => {
  const [hoveredButtonGroup1, setHoveredButtonGroup1] = useState(null);
  const [hoveredButtonGroup2, setHoveredButtonGroup2] = useState(null);
  const [audioState, setAudioState] = useState({});

  const handleMouseEnterGroup1 = (index) => {
    setHoveredButtonGroup1(index);
  };

  const handleMouseLeaveGroup1 = () => {
    setHoveredButtonGroup1(null);
  };

  const handleMouseEnterGroup2 = (index) => {
    setHoveredButtonGroup2(index);
  };

  const handleMouseLeaveGroup2 = () => {
    setHoveredButtonGroup2(null);
  };

  const toggleSound = (sound) => {
    const audio = audioState[sound];
    if (!audio || audio.paused) {
      const newAudio = new Audio(sound);
      newAudio.loop = true;

      newAudio.play();

      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
    } else {
      audio.pause();
    }
  };
  return (
    <>
      <div className="flex border-2 border-blue-900 justify-center items-center sm:space-x-10 space-x-20 xl:space-x-60">
        {buttonTemplateData1.map((item, index) => (
          <button
            key={index}
            className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28 shadow-md"
            style={{
              backgroundColor:
                hoveredButtonGroup1 === index ? "#5EA9BE" : "#fff",
              transition: "background-color 0.8s ease, opacity 1s ease",
            }}
            onClick={() => {
              toggleSound(item.sound);
              if (index === 0) {
                toggleFocus(); // Chiamata alla funzione toggleFocus
              } else if (index === 1) {
                toggleSleep(); // Chiamata alla funzione toggleSleep
              }
            }}
            onMouseEnter={() => handleMouseEnterGroup1(index)}
            onMouseLeave={handleMouseLeaveGroup1}
          >
            {hoveredButtonGroup1 === index ? (
              <div className="flex items-center">
                <span className="text-white font-petrona text-2xl">
                  {item.value}
                </span>
              </div>
            ) : (
              <img src={item.img} alt="icon-button" />
            )}
          </button>
        ))}
      </div>
      <div className="flex justify-around xl:space-x-40 sm:space-x-16 ">
        {buttonTemplateData2.map((item, index) => (
          <button
            key={index}
            className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28 shadow-md"
            style={{
              backgroundColor:
                hoveredButtonGroup2 === index ? "#5EA9BE" : "#fff",
              transition: "background-color 0.8s ease, opacity 1s ease",
            }}
            onClick={() => {
              toggleSound(item.sound);
              if (index === 0) {
                toggleMind(); // Chiamata alla funzione toggleMind
              } else if (index === 1) {
                toggleRead(); // Chiamata alla funzione toggleRead
              }
            }}
            onMouseEnter={() => handleMouseEnterGroup2(index)}
            onMouseLeave={handleMouseLeaveGroup2}
          >
            {hoveredButtonGroup2 === index ? (
              <div className="flex items-center">
                <span className="text-white font-petrona text-2xl">
                  {item.value}
                </span>
              </div>
            ) : (
              <img src={item.img} alt="icon-button" />
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonTemplate;
