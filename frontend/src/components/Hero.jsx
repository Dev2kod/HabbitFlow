import React from "react";
import { useState } from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          fontFamily: "'Algance', sans-serif",
          color: "#eeeeee",
          marginTop: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          fontWeight: "bold",
        }}
      >
        <div style={{ fontFamily: "'Algance', sans-serif" }}>
          Welcome to{" "}
          <span
            className="name"
            style={{ fontFamily: "'Algance', sans-serif", color: "#00c9a7" }}
          >
            HabbitFlow
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
