import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Logo = () => {
  const navigate = useNavigate()
  const [hover, setHover] = useState(false);
  return (
    <div className='logo'  style={{fontFamily: "'Algance', sans-serif", fontSize: "24px",
      color : hover ? "#00efc7ff": "#ffffff",
      cursor: "pointer",
      fontWeight: hover ? "900" : "bold",
      transform: hover ? "scale(1.05)" : "scale(1)",
      transition: "all 0.4s ease-in-out"
    }}
    onClick={()=>{navigate("")}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      HabbitFlow
    </div>
      
)
}
  
export default Logo