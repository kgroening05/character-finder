import React, { useState } from "react";
import './GamePage.css'
import { useParams } from "react-router-dom";
import { levelList } from "../assets/levelList";
import MainImage from "../components/MainImage";
import CharacterTarget from "../components/CharacterTarget";
import isPointInPolygon from '../utils/isPointInPolygon'
import generateUnusedIndex from "../utils/generateUnusedIndex";

function matchLevel(level, levelList) {
  for (const element of levelList) {
    if (element.link === level) {
      return element
    }
  }
  return null;
}

export default function GamePage() {
  const { level } = useParams();
  const levelObj = matchLevel(level, levelList)

  const randomStart = Math.floor(Math.random()* levelObj.portraits.length)
  const [currentCharIndex, setCurrentCharIndex] = useState([randomStart])

  function handleClick(e){
    const yAdjust = e.target.offsetTop
    const xAdjust = e.target.offsetLeft
    const scale = e.target.naturalWidth / e.target.width
    const x = (e.pageX - xAdjust) * scale
    const y = (e.pageY - yAdjust) * scale
    // console.log({x,y})
    const coords = levelObj.coords
    for (const character in coords) {
      const targetCharacterName = levelObj.portraits[currentCharIndex[currentCharIndex.length - 1]]['name']
      if (isPointInPolygon(x,y,coords[character]) && character === targetCharacterName){
        alert(`You found ${character}!`)
        console.log(`You found ${character}!`)
        if (checkWinner()) { break }
        setCurrentCharIndex([...currentCharIndex, generateUnusedIndex(currentCharIndex, levelObj.portraits)])
        break
      }
    }
  }

  function checkWinner(){
    if (currentCharIndex.length > levelObj.portraits.length - 1) {
      alert('You found them all!')
      return true
    }
    return false
  }

  return (
    <>
      <CharacterTarget charList={levelObj.portraits} currentCharIndex={currentCharIndex[currentCharIndex.length - 1]} />
      <div id="image-container">
        <div>Level: {levelObj.name} currentCharIndex: {currentCharIndex}</div>
        <MainImage image={levelObj.image} handleClick={handleClick}/>
      </div>
    </>
  );
}

