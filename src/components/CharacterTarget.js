import React, { useState } from "react";
import './CharacterTarget.css'
import { loadFirebaseStorageImage } from '../firebase';


export default function CharacterTarget({ charList, currentCharIndex }) {
  const [url, setUrl] = useState(null)
  loadFirebaseStorageImage(charList[currentCharIndex]['portrait'], setUrl)

  const bg = {
    background: `center / contain no-repeat url(${url})`,
  }

  return (
    <div id="char-target">
      <p>Find:</p>
      <div className="target-portrait" style={bg}></div>
    </div>
  );
}