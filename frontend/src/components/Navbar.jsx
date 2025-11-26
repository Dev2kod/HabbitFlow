import React from 'react'
import Logo from './Logo'
import DarkButton from './DarkButton'

const Navbar = () => {
  return (
    <div className='navbar' style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px"}}>
      <div className='logo'><Logo/></div>
      <div style={{display:"flex",gap:"15px"}}> 
        <link  />
        <DarkButton text="Credits: 5"/>
            <DarkButton text="Profile"/>
      </div>
    </div>
  ) 
}

export default Navbar