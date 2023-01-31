import React from "react";
import './LevelSelectCard.css'

export default function LevelSelectCard({ levelsList }){
  return (
    <div id="level-cards">
      {levelsList.map(level=>{
        const bg = {
          background: `no-repeat center/80% url(${level.image})`,
        }
        return (
          <div className="level">
            <div class="thumbnail" style={bg}></div>
            <p>{level.name}</p>
          </div>
        );
      })}
    </div>
  );
}