import React, { useState } from "react";
import './LevelCompleteModal.css'
import { addLeaderBoardData } from "../firebase";
import SubmitScoreForm from "./SubmitScoreForm";
import ScoreFormSubmitted from "./ScoreFormSubmitted";

function getDate(){
    return new Date(Date.now())
}


export default function LevelCompleteModal ({ numberFound, level }) {
    const [formSubmitted, setFormSubmitted] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        const name = e.target['input-name'].value
        const score = numberFound
        const date = getDate()
        //console.log({name, score, date, level})
        const Promise = addLeaderBoardData(level, name, score, date)
        Promise.then(
            setFormSubmitted(true)
        )
    }
    
    return(
        <div id="level-complete-modal">
            {formSubmitted 
            ? <ScoreFormSubmitted level={level} />
            : <SubmitScoreForm handleSubmit={handleSubmit} numberFound={numberFound} />}
        </div>
    )
}