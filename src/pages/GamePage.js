import React from "react";
import './GamePage.css'
import { useParams } from "react-router-dom";
import { levelList } from "../assets/levelList";
import MainImage from "../components/MainImage";

function matchLevel(level, levelList) {
  for (const element of levelList) {
    if (element.link === level) {
      return element
    }
  }
  return null;
}

export default function GamePage() {
  const { level } = useParams();
  const levelObj = matchLevel(level, levelList)

  return (
    <>
      <div id="image-container">
        <div>HelloGame {levelObj.name}</div>
        <MainImage image={levelObj.image} coords={levelObj.coords} />
      </div>
    </>
  );
}

