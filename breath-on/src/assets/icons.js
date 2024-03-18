import fire from "./images/fire.svg";
import fireWhite from "./images/fire-white.svg";
import fireSound from "./sounds/campfiresound.wav";

import waves from "./images/waves.svg";
import wavesWhite from "./images/waves-white.svg";
import wavesSound from "./sounds/wavessound.wav";

import water from "./images/water.svg";
import waterWhite from "./images/water-white.svg";
import waterSound from "./sounds/watersound.mp3";

import piano from "./images/piano.svg";
import pianoWhite from "./images/piano-white.svg";
import pianoSound from "./sounds/pianosound.mp3";

import wind from "./images/wind.svg";
import windWhite from "./images/wind-white.svg";
import windSound from "./sounds/windsound.wav";

import bird from "./images/bird.svg";
import birdWhite from "./images/bird-white.svg";
import birdSound from "./sounds/chirping.wav";

import bells from "./images/bells.svg";
import bellsWhite from "./images/bells-white.svg";
import bellsSound from "./sounds/bellssound.wav";

import mind from "./images/mind.svg";
import focus from "./images/focus.svg";
import sleep from "./images/sleep.svg";
import read from "./images/read.svg";

const buttonSoundsObj = [
  {
    img: fire,
    imgWhite: fireWhite,
    title: "fire",
    sound: fireSound,
  },
  {
    img: waves,
    imgWhite: wavesWhite,
    title: "waves",
    sound: wavesSound,
  },
  {
    img: water,
    imgWhite: waterWhite,
    title: "water",
    sound: waterSound,
  },
  {
    img: piano,
    imgWhite: pianoWhite,
    title: "piano",
    sound: pianoSound,
  },
  {
    img: wind,
    imgWhite: windWhite,
    title: "wind",
    sound: windSound,
  },
  {
    img: bird,
    imgWhite: birdWhite,
    title: "chirping",
    sound: birdSound,
  },
  {
    img: bells,
    imgWhite: bellsWhite,
    title: "bells",
    sound: bellsSound,
  },
];

const buttonTemplateData1 = [
  { img: focus, value: "focus", sound: bellsSound },
  { img: sleep, value: "sleep", sound: wavesSound },
];
const buttonTemplateData2 = [
  { img: mind, value: "mind", sound: fireSound },
  { img: read, value: "read", sound: birdSound },
];

export { buttonSoundsObj, buttonTemplateData1, buttonTemplateData2 };
