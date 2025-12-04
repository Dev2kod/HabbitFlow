import React from 'react'
import Logo from './logo'
import DarkButton from './DarkButton'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ simplified nav function (removed extra braces around navigate)
  const nav = (path) => {
    navigate(`/${path}`);
    console.log("buttonclicked"); // ✅ kept console log inside nav
  };

  return (
    <div style={{ position: "sticky", top: "0", width: "100%" }}>
      <div
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px", // ✅ still inline, but could be converted to vh/vw for responsiveness
        }}
      >
        <div className="logo">
          <Logo />
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          {/* ✅ changed onclick → onClick, and replaced habit/profile variables with strings */}
          <DarkButton onClick={()=>nav("focus")} text="FocusMode"/>
          <DarkButton onClick={() => nav("habit")} text="Habits" />
          <DarkButton onClick={() => nav("signin")} text="Signin" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
