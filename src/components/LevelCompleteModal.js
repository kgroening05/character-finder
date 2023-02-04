import React from "react";
import './LevelCompleteModal.css'
import { addLeaderBoardData } from "../firebase";

function getDate(){
    return new Date(Date.now())
}


export default function LevelCompleteModal ({ numberFound, level }) {
    function handleSubmit(e){
        e.preventDefault()
        const name = e.target['input-name'].value
        const score = numberFound
        const date = getDate()
        //console.log({name, score, date, level})
        addLeaderBoardData(level, name, score, date)
    }
    
    return(
        <div id="level-complete-modal">
            <div>
                <h2>Time's Up!</h2>
                <p>You found {numberFound} characters.</p>
            </div>
            <div>
                <p>Enter your name into the leaderboards</p>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <label htmlFor="input-name">Name:</label>
                        <input type="text" name="input-name" />                        
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}