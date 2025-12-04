import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DarkButton = (props) => {
  const [hover, setHover] = useState(false)
    const navigate = useNavigate()

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
      onClick={props.onClick}
>
      {props.text}
    </div>
  )
}

export default DarkButton
