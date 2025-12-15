import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { TaskTodoContext } from "../context/Context";
const Searchbar = (props) => {
  const [ip, setIp] = useState("");
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5vh",
        }}
      >
        <div
          className="searchbox"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "450px",
            height: "70px",
            borderRadius: "30px",
            background: "#030303",
            boxShadow: hover1
              ? "15px 5px 15px rgb(60,60,60), -15px -15px 10px rgb(30, 25, 25)"
              : "15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60)",
            cursor: "pointer",
            transition: "all 700ms",
          }}
          onClick={props.handleclick}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <input
            type="text"
            style={{
              width: "80%",
              height: "65px",
              border: "0px",
              marginLeft: "20px",
              background: "#030303",
              color: "white",
              fontSize: "18px",
              outline: "none",
            }}
            value={ip}
            onChange={(e) => {
              setIp(e.target.value);
              console.log(task);
            }}
            placeholder={props.text}
          />
          <img
          src="./search.svg"
            height="20px"
            style={{
              marginRight: "20px",
              padding: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "all 250ms",
            }}
            className="h-11"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
          </img>
        </div>
      </div>{" "}
    </>
  );
};
export default Searchbar;
