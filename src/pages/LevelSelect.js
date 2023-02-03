import React from "react";
import { Link } from "react-router-dom";
import LevelSelectCard from "../components/LevelSelectCard";
import './LevelSelect.css'

export default function LevelSelect({ levelsList }){
  const levels = Object.keys(levelsList)
  return (
    <div id="level-cards">
      {levels.map((level, index)=>{     
        const currentLevel = levelsList[level]
        return (
          <Link key={index} to={`game/${level}`}>
            <div className="level">
              <LevelSelectCard level={level} levelsList={levelsList}/>
              <p>{currentLevel.name}</p>
            </div>
          </Link>
        ); 
      })}
    </div>
  );
}