import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadFirebaseStorageImage } from "../firebase";
import LevelSelectCard from "./LevelSelectCard";
import './LevelSelect.css'

export default function LevelSelectCard({ levelsList }){

  const [levelUrls, setLevelURLs] = useState([])
  for (const level in levelsList) {
    loadFirebaseStorageImage(levelsList[level]['image'],(url)=>{
      setLevelURLs([...levelUrls, url])
    })
  }

  return (
    <div id="level-cards">
      {levelUrls.map((level, index)=>{

        const bg = {
          background: `no-repeat center url(${level})`,
        }
        return (
          <Link key={index} to={`game/${level}`}>
            <div className="level">
              <div className="thumbnail" style={bg}></div>
              <p>{level.name}</p>
            </div>
          </Link>
        ); 
      })}
    </div>
  );
}