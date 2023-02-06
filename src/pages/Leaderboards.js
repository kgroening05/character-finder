import React, { useState } from "react";
import { getLeaderBoardData } from "../firebase";
import LevelLeaderboard from "../components/LevelLeaderboard";

export default function Leaderboards({ levelsList }) {
  const levels = Object.keys(levelsList)
  const [leaderboardData, setLeaderboardData] = useState()

  getLeaderBoardData(levels[3], appendLeaderboardData)
  
  function appendLeaderboardData(newData){
    setLeaderboardData(newData)
  }

  return (
    <>
      <div>Hello</div>
      <LevelLeaderboard leaderboardData={leaderboardData}/>
    </>
  )
}