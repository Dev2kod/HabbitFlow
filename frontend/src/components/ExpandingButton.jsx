import React from "react";
import { useState } from "react";
const ExpandingButton = ({ Before, after }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="card1"
        style={{
          display: "flex",
          alignItems:"center",
          justifyContent: "center",
          width: hover ? "25vh" : "8vh",
          height: "8vh",
          backgroundColor: hover ? "#030303" : "#030303",
          border: "1px solid #eeeeee",
          boxShadow: hover
            ? "0px 0px 30px 1px rgba(0, 255, 117, 0.30)"
            : "none",
          padding: "10px",
          borderRadius: "8vh",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "bold",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transition: "all 400ms ease-in-out",
        }}
      >
        <div
          className="card2"
          style={{
            width: hover ? "150px" : "40px",
            height: "40px",
            backgroundColor: hover ? "#030303" : "#030303",
            borderRadius: "0px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            color: "#eeeeee",

            transition: "all 400ms ease-in-out",
          }}
        >
          {hover ? (
            <div>
              <>{Before}</>
            </div>
          ) : (
            after
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandingButton;
