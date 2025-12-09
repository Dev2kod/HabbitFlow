import React, { useState } from "react";

const Bar2 = () => {
  const [hoverIcon, setHoverIcon] = useState(false);
  const [hoverBox, setHoverBox] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "400px",
          height: "55px",
          borderRadius: "20px",
          background: "#111",
          boxShadow: hoverBox
            ? "0 6px 12px rgba(0,0,0,0.25)"
            : "0 3px 6px rgba(0,0,0,0.15)",
          transition: "all 300ms ease",
          padding: "0 15px",
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
            outline: "none",
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hoverIcon ? "#fff" : "#aaa"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            cursor: "pointer",
            backgroundClip:"text",
            transition: "transform 200ms ease, stroke 200ms ease",
            transform: hoverIcon ? "scale(1.15)" : "scale(1)",
          }}
          onMouseEnter={() => setHoverIcon(true)}
          onMouseLeave={() => setHoverIcon(false)}
        >
          <circle cx="11" cy="11" r="6"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
};

export default Bar2;
