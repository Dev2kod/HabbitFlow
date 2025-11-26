import React, { useState } from 'react'

const DarkButton = ({ text }) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="darkButtons"
      style={{
        marginTop: "5px",
        borderRadius: "20px",
        color: hover ? "#ffffff" : "#aaaaaa",
        padding: "8px 16px",
        border: hover ? "1px solid #3effdfff":"1px solid #00c9a7",
        transition: "color 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
    </div>
  )
}

export default DarkButton