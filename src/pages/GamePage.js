import React, { useState } from "react";
import './GamePage.css'
import { useParams } from "react-router-dom";
import { levelList } from "../assets/levelList";
import MainImage from "../components/MainImage";
import CharacterTarget from "../components/CharacterTarget";
import isPointInPolygon from '../utils/isPointInPolygon'


function matchLevel(level, levelList) {
  for (const element of levelList) {
    if (element.link === level) {
      return element
    }
  }
  return null;
}

function generateUnusedIndex(usedNumberList, fullList){
  const newNum = Math.floor(Math.random() * fullList.length)
  const isFound = usedNumberList.find(element=>element === newNum)
  return (isFound ? generateUnusedIndex(usedNumberList, fullList) : newNum)
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
      if (isPointInPolygon(x,y,coords[character])){
        setCurrentCharIndex([...currentCharIndex, generateUnusedIndex(currentCharIndex, levelObj.portraits)])
        alert(`You found ${character}!`)
        checkWinner()
      }
    }
  }

  function checkWinner(){
    if (currentCharIndex.length > levelObj.portraits.length - 1) {
      alert('You found them all!')
    }

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

