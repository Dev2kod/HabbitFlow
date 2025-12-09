import React, { useState } from "react";

const Bar1 = () => {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [hoverBox, setHoverBox] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "420px",
          height: "60px",
          borderRadius: "30px",
          background: hoverBox
            ? "linear-gradient(135deg, rgba(40,40,40,0.9), rgba(20,20,20,0.9))"
            : "linear-gradient(135deg, rgba(25,25,25,0.85), rgba(15,15,15,0.85))",
          backdropFilter: "blur(8px)",
          boxShadow: hoverBox
            ? "0 10px 25px rgba(0,0,0,0.4)"
            : "0 6px 15px rgba(0,0,0,0.25)",
          transition: "all 400ms ease",
          padding: "0 20px",
        }}
        onMouseEnter={() => setHoverBox(true)}
        onMouseLeave={() => setHoverBox(false)}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            flex: 1,
            height: "100%",
            border: "none",
            background: "transparent",
            color: "#fff",
            fontSize: "16px",
            letterSpacing: "0.5px",
            outline: "none",
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hoverIcon ? "url(#grad1)" : "#bbb"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            cursor: "pointer",
            transition: "transform 250ms ease, stroke 250ms ease",
            transform: hoverIcon ? "rotate(10deg) scale(1.25)" : "scale(1)",
          }}
          onMouseEnter={() => setHoverIcon(true)}
          onMouseLeave={() => setHoverIcon(false)}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6a5acd" />
              <stop offset="50%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#ff758c" />
            </linearGradient>
          </defs>
          <circle cx="11" cy="11" r="6"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default Bar1;
