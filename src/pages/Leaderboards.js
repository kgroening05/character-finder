import React from "react";
import LevelLeaderboard from "../components/LevelLeaderboard";
import './Leaderboards.css'

export default function Leaderboards({ levelsList }) {
  const levels = Object.keys(levelsList)

  return (
    <div className="leaderboards">
      {levels.map(element => <LevelLeaderboard level={ element } name={ levelsList[element]['name']} />)}
    </div>
  )
}