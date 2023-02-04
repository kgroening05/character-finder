import React, { useState } from "react";
import './CharacterTarget.css'
import { loadFirebaseStorageImage } from '../firebase';
import CountDown from "./CoundDown";


export default function CharacterTarget({ charList, currentCharIndex, gameStarted, countdownTime, seconds, handleCountdown }) {
  const [url, setUrl] = useState(null)
  if (charList[currentCharIndex]){
    loadFirebaseStorageImage(charList[currentCharIndex]['portrait'], setUrl)
  }

  const bg = {
    background: `center / contain no-repeat url(${url})`,
  }

  return (
    <div id="char-target">
      <p>Find:</p>
      <div className="target-portrait" style={bg}></div>
      <CountDown isTimerStarted={gameStarted} countdownTime={countdownTime} seconds={seconds} handleCountdown={handleCountdown} />
    </div>
  );
}