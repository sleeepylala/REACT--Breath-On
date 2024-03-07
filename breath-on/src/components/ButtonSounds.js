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
    <div className="container-sounds border-3 border-black items-center justify-around sm:grid sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-row">
      {buttonSounds.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-around m-2"
        >
          <button className="border rounded-full bg-white flex items-center justify-center w-24 h-24 ">
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
