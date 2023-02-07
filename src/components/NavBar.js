import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li className="nav">Home</li></Link>
        <Link to="/leaderboards"><li className="nav">Leaderboard</li></Link>
      </ul>
    </nav>
  );
}