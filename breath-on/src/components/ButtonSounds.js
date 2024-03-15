import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const ButtonSounds = () => {
  const [audioState, setAudioState] = useState({});
  const [colorPressed, setColorPressed] = useState({});
  const [putBorder, setPutBorder] = useState({});
  const [volumeLevel, setVolumeLevel] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const buttonSounds = [
    {
      img: "../assets/images/fire.svg",
      title: "fire",
      sound: "../assets/sounds/campfiresound.wav",
    },
    {
      img: "../assets/images/waves.svg",
      title: "waves",
      sound: "../assets/sounds/wavessound.wav",
    },
    {
      img: "../assets/images/water.svg",
      title: "water",
      sound: "../assets/sounds/watersound.mp3",
    },
    {
      img: "../assets/images/piano.svg",
      title: "piano",
      sound: "../assets/sounds/pianosound.mp3",
    },
    {
      img: "../assets/images/wind.svg",
      title: "wind",
      sound: "../assets/sounds/windsound.wav",
    },
    {
      img: "../assets/images/bird.svg",
      title: "chirping",
      sound: "../assets/sounds/chirping.wav",
    },
    {
      img: "../assets/images/bells.svg",
      title: "bells",
      sound: "../assets/sounds/bellssound.wav",
    },
  ];

  const toggleSound = (sound) => {
    const audio = audioState[sound];
    if (!audio || audio.paused) {
      // Se l'audio non è stato creato o è in pausa, crealo e avvialo
      const newAudio = new Audio(sound);
      newAudio.loop = true;
      newAudio.volume = 0.5;
      newAudio.play();

      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
      setColorPressed((prevColor) => ({ ...prevColor, [sound]: "#FFD6CB" }));
      setPutBorder((prevBorder) => ({ ...prevBorder, [sound]: true }));
    } else {
      // Se l'audio è attualmente in riproduzione, mettilo in pausa
      audio.pause();
      setColorPressed((prevColor) => ({ ...prevColor, [sound]: "#fff" }));
      setPutBorder((prevBorder) => ({ ...prevBorder, [sound]: false }));
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
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {buttonSounds.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-around m-2"
            >
              <button
                className="rounded-full bg-white flex items-center justify-center w-24 h-24 "
                style={{
                  backgroundColor: colorPressed[item.sound],
                  border: putBorder[item.sound] ? "3px solid #5EA9BE" : "none",
                }}
                onClick={() => toggleSound(item.sound)}
              >
                <img src={item.img} alt="iconsounds-button" />
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

              <p className="text-textColor font-petrona xl:text-xl mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </Carousel>
      ) : (
        buttonSounds.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-around m-2"
          >
            <button
              className="rounded-full bg-white flex items-center justify-center w-24 h-24 "
              style={{
                backgroundColor: colorPressed[item.sound],
                border: putBorder[item.sound] ? "3px solid #5EA9BE" : "none",
              }}
              onClick={() => toggleSound(item.sound)}
            >
              <img src={item.img} alt="iconsounds-button" />
            </button>
            {audioState[item.sound] && !audioState[item.sound].paused && (
              <input
                className="w-20 mt-3"
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

            <p className="text-textColor font-petrona xl:text-xl mt-2">
              {item.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ButtonSounds;
