import { useState } from 'react'
const Card = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className='card'
    style={{marginTop: "20px",
      border:hovered?"1px solid #00efc7ff":"0.1px solid #eeeeee",
      borderRadius:"30px",width:"250px",
      height:"270px",display:"flex",
      flexDirection:"column",alignItems:"center",
      justifyContent:"center",gap:"15px",
      transition:"0.3s ease-in-out",
      transform: hovered? "scale(1.05)": "none"}}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
    <div >
      {hovered ? 
      <div style={{fontFamily: "'Algance', sans-serif",fontSize:"24px"}}>
        {props.body}
      </div> : 
      <div style={{fontFamily: "'Algance', sans-serif",fontSize:"24px",transition:"0.3s ease-in-out"}}>
        {props.title }
      </div>}  
    </div>
    </div>
  )
}

export default Card