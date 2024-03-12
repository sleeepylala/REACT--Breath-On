import React, { useState } from "react";

const ButtonSounds = () => {
  const [audioState, setAudioState] = useState({});
  const [colorPressed, setColorPressed] = useState({});

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
      newAudio.play();
      setAudioState((prevState) => ({ ...prevState, [sound]: newAudio }));
      setColorPressed((prevColor) => ({ ...prevColor, [sound]: "#FFD6CB" }));
    } else {
      // Se l'audio è attualmente in riproduzione, mettilo in pausa
      audio.pause();
      setColorPressed((prevColor) => ({ ...prevColor, [sound]: "#fff" }));
    }
  };

  return (
    <div className="container-sounds border-3 border-black items-center justify-around sm:grid sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
      {buttonSounds.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-around m-2"
        >
          <button
            className="border rounded-full bg-white flex items-center justify-center w-24 h-24 "
            style={{
              backgroundColor: colorPressed[item.sound],
            }}
            onClick={() => toggleSound(item.sound)}
          >
            <img src={item.img} alt="iconsounds-button" />
          </button>
          <p className="text-textColor font-petrona xl:text-xl mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ButtonSounds;
