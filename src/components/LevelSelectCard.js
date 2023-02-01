import React from "react";
import { Link } from "react-router-dom";
import './LevelSelectCard.css'

export default function LevelSelectCard({ levelsList }){
  return (
    <div id="level-cards">
      {levelsList.map(level=>{
        const bg = {
          background: `no-repeat center url(${level.image})`,
        }
        return (
          <Link to={`game/${level.link}`}>
            <div className="level">
              <div class="thumbnail" style={bg}></div>
              <p>{level.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}