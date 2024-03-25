import React, { useState, useEffect, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { buttonSoundsObj } from "../assets/icons";
import InputVolume from "./InputVolume";
import { useTheme } from "../context/ThemeContext";

const ButtonSounds = () => {
  const { darkMode } = useTheme();

  const [audioPaths, setAudioPaths] = useState({});
  const [audioState, setAudioState] = useState({});
  const [volumeLevel, setVolumeLevel] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const audioRefs = useRef({});

  // Effetto per il cleanup alla rimozione del componente
  useEffect(() => {
    return () => {
      stopAllSounds();
    };
  }, []);

  // Effetto per l'inizializzazione degli stati
  useEffect(() => {
    const initialVolumeLevels = buttonSoundsObj.reduce((acc, curr) => {
      acc[curr.sound] = 0.8;
      return acc;
    }, {});
    setVolumeLevel(initialVolumeLevels);
    const paths = {};
    buttonSoundsObj.forEach((sound) => {
      paths[sound.sound] = sound.sound;
    });
    setAudioPaths(paths);
  }, []);

  // Funzione per riprodurre un suono
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.loop = true;
    audio
      .play()
      .catch((error) => console.error("Error playing the sound:", error));
    return audio;
  };
  // Funzione per fermare un suono
  const stopSound = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  };
  // Funzione per fermare tutti i suoni
  const stopAllSounds = () => {
    Object.values(audioRefs.current).forEach(stopSound);
  };

  // Funzione per attivare/disattivare un suono
  const toggleSound = (sound) => {
    const audio = audioRefs.current[sound];
    if (!audio || audio.paused) {
      const newAudio = playSound(audioPaths[sound]);
      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
      audioRefs.current[sound] = newAudio;
    } else {
      stopSound(audio);
    }
  };

  // Funzione per gestire il cambio del volume
  const handleVolumeChange = (event, sound) => {
    const volume = event.target.value / 100;
    const audio = audioState[sound];
    if (audio) {
      audio.volume = volume;
      setVolumeLevel((prevVolume) => ({ ...prevVolume, [sound]: volume }));
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Effetto per rilevare se si sta utilizzando un dispositivo mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-sounds  items-center justify-around sm:grid sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
      {isMobile ? (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {buttonSoundsObj.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-around m-2"
            >
              <button
                className="rounded-full bg-white flex items-center justify-center w-24 h-24 shadow-md"
                style={{
                  background:
                    hoveredButton === index
                      ? "#5EA9BE"
                      : darkMode
                      ? "#FFDDD3"
                      : "#FFFFFF",
                }}
                onClick={() => toggleSound(item.sound)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredButton === index ? (
                  <img src={item.imgWhite} alt="iconsounds-button" />
                ) : (
                  <img src={item.img} alt="iconsounds-button" />
                )}
              </button>
              {audioState[item.sound] && !audioState[item.sound].paused && (
                <InputVolume
                  value={volumeLevel[item.sound] * 100}
                  onChange={(event) => handleVolumeChange(event, item.sound)}
                />
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        buttonSoundsObj.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-around m-2"
          >
            <button
              className="rounded-full bg-white flex items-center justify-center w-24 h-24 shadow-md"
              style={{
                background:
                  hoveredButton === index
                    ? "#5EA9BE"
                    : darkMode
                    ? "#FFDDD3"
                    : "#FFFFFF",
              }}
              onClick={() => {
                toggleSound(item.sound);
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredButton === index ? (
                <img src={item.imgWhite} alt="iconsounds-button" />
              ) : (
                <img src={item.img} alt="iconsounds-button" />
              )}
            </button>
            <div className="h-10 w-20">
              {audioState[item.sound] && !audioState[item.sound].paused && (
                <InputVolume
                  value={volumeLevel[item.sound] * 100}
                  onChange={(event) => handleVolumeChange(event, item.sound)}
                />
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ButtonSounds;
