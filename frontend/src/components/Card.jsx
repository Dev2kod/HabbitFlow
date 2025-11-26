import React, { use } from 'react'
import { useState } from 'react'
const Card = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{marginTop: "20px",border:hovered?"1px solid #00efc7ff":"0.1px solid #eeeeee",borderRadius:"30px",width:"250px",height:"270px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"15px"}}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    <div style={{fontFamily: "'Algance', sans-serif"}}>{props.title}</div>
    </div>
  )
}

export default Card