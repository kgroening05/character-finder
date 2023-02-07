import React, { useState, useEffect } from "react";
import { getLeaderBoardData } from "../firebase";


export default function LevelLeaderboard ({ level, name }) {
  const [leaderboardData, setLeaderboardData] = useState(null)

  useEffect(()=>{
    getLeaderBoardData(level)
    .then((data)=>{
      console.log(data)
      setLeaderboardData(data)
    })
  },[level]);

  return (
    <table className="level-leaderboard">
      <th colSpan="2" className="table-title">{name}</th>
      {leaderboardData 
      ? leaderboardData.map( element => {
        return (
          <tr className="board-item">
            <td className="player-name">{element.name}</td>
            <td className="player-score">{element.score}</td>
          </tr>
        )
      }) 
      : null
      }
    </table>       
  )
}