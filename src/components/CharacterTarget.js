import React from "react";
import './CharacterTarget.css'

export default function CharacterTarget({ charList, currentCharIndex }) {
  const bg = {
    background: `center / contain no-repeat url(${charList[currentCharIndex]['portrait']})`,
  }

  return (
    <div id="char-target">
      <p>Find:</p>
      <div className="target-portrait" style={bg}></div>
    </div>
  );
}