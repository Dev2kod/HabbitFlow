import React, { useState, useEffect } from "react";
import WhiteButton from "../components/WhiteButton";

const Focus = () => {
  // total time in seconds (25 minutes default)
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // format time into mm:ss
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // countdown effect
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // handlers
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(25 * 60); // reset to 25 minutes
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Timer Display */}
      <div
        style={{
          marginTop: "20vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          fontFamily: "'Algance', sans-serif",
          fontSize: "70px",
          color: "#00c9a7",
        }}
      >
        {formatTime(time)}
      </div>

      {/* Buttons */}
      <div
        className="Buttons"
        style={{ display: "flex", justifyContent: "center", gap: "5vh" }}
      >
        <WhiteButton onClick={handleStart} text="Start" />
        <WhiteButton onClick={handlePause} text="Pause" />
        <WhiteButton onClick={handleReset} text="Reset" />
      </div>
    </div>
  );
};

export default Focus;
