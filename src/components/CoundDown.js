import React, { useEffect } from "react";

export default function CountDown ({ isTimerStarted, countdownTime, seconds, handleCountdown }) {
    let endTime;
    if(isTimerStarted){
      endTime = Date.now() + countdownTime
    }
  
    const getTimeRemaining = (endTime) => {
      const timeRemaining = endTime - Date.now();
      handleCountdown(timeRemaining)

    };
  
    useEffect(() => {
      if(isTimerStarted){
        const interval = setInterval(() => getTimeRemaining(endTime), 1000);
        return () => clearInterval(interval);
      }
    }, [isTimerStarted]);
  
    return (
      <>
      <div className="timer-desc">Time Remaining:</div>
      <div className="timer-count">{seconds}</div>
      </>
    );
  };
  