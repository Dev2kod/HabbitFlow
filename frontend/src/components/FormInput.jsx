import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3vh",
      }}
    >
      <input
        type={props.type || "text"} // default to text if not provided
        placeholder={props.placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => props.onChange(e.target.value)} // ✅ pass value to parent
        style={{
          width: "30vw",                // responsive width
          height: "6vh",                // responsive height
          padding: "0 2vw",             // horizontal padding in vw
          borderRadius: "1vh",          // rounded corners scale with viewport
          border: focused ? "0.3vh solid #4cafef" : "0.3vh solid #333",
          background: "#171717",
          color: "white",
          fontSize: "2vh",              // scales with viewport height
          outline: "none",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
          boxShadow: focused ? "0 0 1vh rgba(76, 175, 239, 0.6)" : "none",
        }}
      />
    </div>
  );
};

export default FormInput;
