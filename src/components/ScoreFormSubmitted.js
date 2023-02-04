import React from "react"

export default function ScoreFormSubmitted({ level }) {
  return (
    <>
      <div>
        <h2>Score Submitted!</h2>
        <button onClick={()=>window.location.reload()} >Retry?</button>
      </div>
    </>
  )
}
