import React from "react";

export default function StartButton({ startCallback }){
    return(
        <button onClick={startCallback} className="start-button">START</button>
    )
}