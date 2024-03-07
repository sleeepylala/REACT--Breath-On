import React from "react";

const ButtonSounds = () => {
  const buttonSounds = [
    { img: "../assets/images/fire.svg", title: "fire" },
    { img: "../assets/images/waves.svg", title: "waves" },
    { img: "../assets/images/water.svg", title: "water" },
    { img: "../assets/images/piano.svg", title: "piano" },
    { img: "../assets/images/wind.svg", title: "wind" },
    { img: "../assets/images/bird.svg", title: "chirping" },
    { img: "../assets/images/jungle.svg", title: "jungle" },
  ];

  return (
    <div className="flex flex-row justify-around items-center py-7">
      {buttonSounds.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-around">
          <button className="border rounded-full bg-white flex items-center justify-center sm:w-16 sm:h-16 xl:h-20 xl:w-20 mb-2">
            <img src={item.img} alt="iconsounds-button" />
          </button>
          <p className="text-textColor font-petrona xl:text-xl">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonSounds;
