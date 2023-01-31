import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboards">Leaderboard</Link></li>
      </ul>
    </nav>
  );
}