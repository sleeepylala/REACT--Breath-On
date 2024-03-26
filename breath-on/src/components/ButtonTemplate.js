import React, { useState, useEffect } from "react";
import { buttonTemplateData1, buttonTemplateData2 } from "../assets/icons";
import InputVolume from "./InputVolume";
import { useTheme } from "../context/ThemeContext";

const ButtonTemplate = ({
  toggleMind,
  toggleRead,
  toggleSleep,
  toggleFocus,
}) => {
  const { darkMode } = useTheme();
  const [hoveredButtonGroup1, setHoveredButtonGroup1] = useState(null);
  const [hoveredButtonGroup2, setHoveredButtonGroup2] = useState(null);

  const [audioState, setAudioState] = useState({});
  const [volumeLevel, setVolumeLevel] = useState({});

  // Effetto per fermare tutti gli audio attivi alla rimozione del componente
  useEffect(() => {
    const stopAllSounds = () => {
      Object.values(audioState).forEach((audio) => {
        audio.pause();
      });
    };

    return () => {
      stopAllSounds();
    };
  }, [audioState]);

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

  // Funzione per attivare/disattivare un suono
  const toggleSound = (sound) => {
    Object.keys(audioState).forEach((key) => {
      if (key !== sound) {
        audioState[key].pause();
      }
    });

    const audio = audioState[sound];
    if (!audio || audio.paused) {
      const newAudio = new Audio(sound);
      newAudio.loop = true;
      newAudio.volume = 0.5;
      newAudio.play();
      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
    } else {
      audio.pause();
    }
  };

  // Funzione per gestire il cambiamento del volume.
  const handleVolumeChange = (event, index) => {
    const volume = event.target.value / 100;
    const audio = audioState[index];
    if (audio) {
      audio.volume = volume;
      setVolumeLevel((prevVolume) => ({ ...prevVolume, [index]: volume }));
    }
  };
  return (
    <>
      <div className="flex  justify-center items-center sm:space-x-10 space-x-20 xl:space-x-60">
        {buttonTemplateData1.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-center items-center flex-col ">
              <button
                className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28 shadow-md sm:sp"
                style={{
                  backgroundColor:
                    hoveredButtonGroup1 === index
                      ? "#5EA9BE"
                      : darkMode
                      ? "#FFDDD3"
                      : "#FFFFFF",
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
              <div className="h-10 w-20">
                {audioState[item.sound] && !audioState[item.sound].paused && (
                  <InputVolume
                    value={
                      (audioState[item.sound].volume *
                        100 *
                        (volumeLevel[item.sound] || 0.8)) /
                      0.8
                    }
                    onChange={(event) => handleVolumeChange(event, item.sound)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around xl:space-x-40 sm:space-x-16 ">
        {buttonTemplateData2.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-center items-center flex-col ">
              <button
                className="button-template border rounded-full bg-white flex justify-center items-center h-28 w-28 shadow-md"
                style={{
                  backgroundColor:
                    hoveredButtonGroup2 === index
                      ? "#5EA9BE"
                      : darkMode
                      ? "#FFDDD3"
                      : "#FFFFFF",
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
              <div className="h-10 w-20">
                {audioState[item.sound] && !audioState[item.sound].paused && (
                  <InputVolume
                    value={
                      (audioState[item.sound].volume *
                        100 *
                        (volumeLevel[item.sound] || 0.8)) /
                      0.8
                    }
                    onChange={(event) => handleVolumeChange(event, item.sound)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonTemplate;
