import React from 'react'
import Logo from './logo'
import DarkButton from './DarkButton'

const Navbar = () => {

  return (
    <div style={{ position: "sticky", top: "0", width: "100%" }}>
      <div
        className='navbar'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px"
        }}
      >
        <div className='logo'>
          <Logo />
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          {/* Removed invalid <link /> */}
          <DarkButton text="Habbits" path="habit" />
          <DarkButton text="Profile" path="profile" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
