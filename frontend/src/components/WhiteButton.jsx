import React from "react";

const WhiteButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "10vw",               // responsive width
        height: "6vh",               // responsive height
        borderRadius: "2vh",         // rounded corners scale with viewport
        border: "1px solid #030303",
        background: "linear-gradient(135deg, #00c9a7, #03eaffff)", // gradient teal
        color: "#030303",
        fontSize: "2vh",             // scales with viewport height
        fontWeight: "100",
        fontFamily: "'Algance', sans-serif",
        cursor: "pointer",
        transition: "all 0.3s ease",
        marginTop: "3vh",            // fixed marginTop
      }}
    
    >
      {text}
    </button>
  );
};

export default WhiteButton;
