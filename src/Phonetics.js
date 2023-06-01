import React, { useState } from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  let [isPlaying, setIsPlaying] = useState(false);

  function playAudio() {
    if (props.phonetic.audio) {
      let audio = new Audio(props.phonetic.audio);
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  }
  return (
    <div className="Phonetic">
      <div className="Phonetic__text">
        <div className="Phonetic__text__phonetic">
          {props.phonetic.audio ? (
            <button
              type="button"
              className="btn rounded-pill play"
              onClick={playAudio}
              disabled={isPlaying}
            >
              <i className="bi bi-play-fill"></i>
            </button>
          ) : (
            <span className="not-available">Audio not available</span>
          )}
        </div>
        <div className="text">{props.phonetic.text}</div>
      </div>
    </div>
  );
}
