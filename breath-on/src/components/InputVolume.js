import React, { useEffect, useState } from "react";
import { FaVolumeMute } from "react-icons/fa";

const InputVolume = ({ value, onChange }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Controlla se il volume è zero e imposta lo stato di 'isMuted' di conseguenza
    setIsMuted(value === 0);
  }, [value]);

  // Calcolo del gradiente per lo slider del volume
  const volumeGradient = `linear-gradient(
    to right,
    #5ea9be 0%,
    #5ea9be ${value}%,
    rgba(94, 169, 190, 0.5) ${value}%,
    rgba(94, 169, 190, 0.5) 100%
  )`;

  return (
    <div>
      <input
        className="w-20 mt-3"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        style={{ background: volumeGradient }}
      />

      {isMuted && <FaVolumeMute className="text-primary w-20 h-5" />}
    </div>
  );
};

export default InputVolume;
