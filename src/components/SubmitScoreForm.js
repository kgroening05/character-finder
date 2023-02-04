import React from "react"

export default function SubmitScoreForm({ numberFound, handleSubmit }) {
  return (
    <>
      <div>
        <h2>Time's Up!</h2>
        <p>You found {numberFound} characters.</p>
      </div>
      <div>
        <p>Enter your name into the leaderboards</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="input-name">Name:</label>
            <input type="text" name="input-name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
