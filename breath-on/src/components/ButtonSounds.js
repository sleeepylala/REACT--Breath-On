import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { buttonSoundsObj } from "../assets/icons";

const ButtonSounds = () => {
  const [audioState, setAudioState] = useState({});
  const [volumeLevel, setVolumeLevel] = useState({});
  const [isMobile, setIsMobile] = useState(false); //stato per vedere se è mobile e mettere il carosello
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredButton(index);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const toggleSound = (sound) => {
    const audio = audioState[sound];
    if (!audio || audio.paused) {
      // Se l'audio non è stato creato o è in pausa, crealo e avvialo
      const newAudio = new Audio(sound);
      newAudio.loop = true;

      newAudio.play();

      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
    } else {
      // Se l'audio è attualmente in riproduzione, mettilo in pausa
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

  // Hook di effetto per gestire il ridimensionamento della finestra per il carosello
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize); // Aggiunge un listener per il ridimensionamento della finestra
    return () => {
      window.removeEventListener("resize", handleResize); // Pulisce il listener al momento dello smontaggio del componente
    };
  }, []);

  // Inizializzazione dei livelli di volume
  useEffect(() => {
    const initialVolumeLevels = buttonSoundsObj.reduce((acc, curr) => {
      acc[curr.sound] = 0.8; // Imposta il volume predefinito
      return acc;
    }, {});
    setVolumeLevel(initialVolumeLevels);
  }, []);

  return (
    <div className="container-sounds border-3 border-black items-center justify-around sm:grid sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
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
                  background: hoveredButton === index ? "#5EA9BE" : "#FFFFFF",
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
                <input
                  className="w-20 mt-3"
                  id="volume-control"
                  type="range"
                  min="0"
                  max="100"
                  defaultValue={
                    volumeLevel[item.sound] !== undefined
                      ? volumeLevel[item.sound] * 100
                      : 50
                  }
                  onChange={(event) => handleVolumeChange(event, item.sound)}
                  style={{
                    background: `linear-gradient(
                  to right,
                  #5ea9be 0%,
                  #5ea9be ${volumeLevel[item.sound] * 100}%,
                  rgba(94, 169, 190, 0.5) ${volumeLevel[item.sound] * 100}%,
                  rgba(94, 169, 190, 0.5) 100%
                )`,
                  }}
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
                background: hoveredButton === index ? "#5EA9BE" : "#FFFFFF",
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
            <div className="h-10 w-20">
              {audioState[item.sound] && !audioState[item.sound].paused && (
                <input
                  className="w-20"
                  id="volume-control"
                  type="range"
                  min="0"
                  max="100"
                  defaultValue={volumeLevel[item.sound] * 100}
                  onChange={(event) => handleVolumeChange(event, item.sound)}
                  style={{
                    background: `linear-gradient(
              to right,
              #5ea9be 0%,
              #5ea9be ${volumeLevel[item.sound] * 100}%,
              rgba(94, 169, 190, 0.5) ${volumeLevel[item.sound] * 100}%,
              rgba(94, 169, 190, 0.5) 100%
            )`,
                  }}
                />
              )}
            </div>

            {/* <p className="text-textColor font-petrona xl:text-xl">
              {item.title}
            </p> */}
          </div>
        ))
      )}
    </div>
  );
};

export default ButtonSounds;
