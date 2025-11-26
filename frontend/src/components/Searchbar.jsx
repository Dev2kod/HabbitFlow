import React from 'react'
import { useState } from 'react';

const Searchbar = () => {
  const [hover, setHover] = useState(false);  
  const [hover1, setHover1] = useState(false);
  return (
    <>
    
    
    <div className='container' style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5vh"}}>
      
      <div className='searchbox' style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "450px",
        height: "70px",
        borderRadius: "30px",
        background: "#030303",
        boxShadow:hover1? "15px 15px 15px rgb(60,60,60), -15px -15px 30px rgb(25, 25, 25)":"15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
        cursor: "pointer",
        transition: "all 700ms"}}
        onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}>
          <input type="text" style={{width:"80%",height:"65px",border:"0px",marginLeft:"20px",background:"#030303",color:"white",fontSize:"18px",outline:"none"}} placeholder='We help you grow...' />
          <svg  xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={hover ? "#ffffffff" : "#d2d2d2ff"}
            transform= {hover ? "scale(1.1)" : "scale(1)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              marginRight: "20px",
              padding:"10px",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 250ms"
            }}onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
>
  <circle cx="11" cy="11" r="6"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          
</svg>
      </div>
    </div>    </>
  )
}
export default Searchbar