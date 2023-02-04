import React, { useState } from "react";
import './GamePage.css'
import { useParams } from "react-router-dom";
import gamedata from '../assets/gamedata.json'
import MainImage from "../components/MainImage";
import CharacterTarget from "../components/CharacterTarget";
import isPointInPolygon from '../utils/isPointInPolygon'
import generateUnusedIndex from "../utils/generateUnusedIndex";
import stringToCoordsArray from '../utils/stringToCoordsArray';
import StartButton from "../components/StartButton";

function matchLevel(level, gamedata) {
  for (const element in gamedata) {
    if (element === level) {
      return gamedata[element]
    }
  }
  return null;
}

export default function GamePage() {
  const { level } = useParams();
  const levelObj = matchLevel(level, gamedata.levels)
  const coordsObj = levelObj.coords
  const portraitsObj = levelObj.portraits
  const numberOfCharacters = Object.keys(levelObj.portraits).length
  const randomStart = Math.floor(Math.random()* numberOfCharacters)
  const [completedCharIndexes, setcompletedCharIndexes] = useState([randomStart])
  const [gameStarted, setGameStarted] = useState(false)
  const currentCharacterIndex = completedCharIndexes[completedCharIndexes.length - 1]

  function handleClick(e){
    const yAdjust = e.target.offsetTop
    const xAdjust = e.target.offsetLeft
    const scale = e.target.naturalWidth / e.target.width
    const x = (e.pageX - xAdjust) * scale
    const y = (e.pageY - yAdjust) * scale
    // console.log({x,y})
    const targetCharacterName = portraitsObj[currentCharacterIndex]['name']
    const characterPolygon = stringToCoordsArray(coordsObj[targetCharacterName])

    if (isPointInPolygon(x , y, characterPolygon)){
      alert(`You found ${targetCharacterName}!`)
      console.log(`You found ${targetCharacterName}!`)
      if (!checkWinner()) {
        let nextCharacterIndex = generateUnusedIndex(completedCharIndexes, portraitsObj)
        setcompletedCharIndexes([...completedCharIndexes, nextCharacterIndex])
      }
    }
  }

  function checkWinner(){
    if (completedCharIndexes.length > Object.keys(portraitsObj).length - 1) {
      alert('You found them all!')
      return true
    }
    return false
  }
  
  function handleStartButtonClick(){
    setGameStarted(true)
  }

  return (
    <>
      <CharacterTarget charList={levelObj.portraits} currentCharIndex={currentCharacterIndex} />
      <div id="image-container">
        {gameStarted ? null : <StartButton startCallback={handleStartButtonClick}/>}
        <div>Level: {levelObj.name} currentCharIndex: {completedCharIndexes}</div>
        <MainImage image={levelObj.image} handleClick={handleClick} brightness={gameStarted ? "100%" : "0%"} />
      </div>
    </>
  );
}

