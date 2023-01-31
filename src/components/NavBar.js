import React from "react";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/leaderboards">Leaderboard</a></li>
      </ul>
    </nav>
  );
}