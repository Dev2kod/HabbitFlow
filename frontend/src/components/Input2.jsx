import React from "react";
import { useState, useContext } from "react";
import { TaskTodoContext } from "../context/Context";

const Input2 = (props) => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const { task, settask, todo, settodo } = useContext(TaskTodoContext);

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
          width: "400px",
          height: "55px",
          borderRadius: "20px",
          background: "#111",
          boxShadow: hover1
            ? "0 6px 12px rgba(0,0,0,0.25)"
            : "0 3px 6px rgba(0,0,0,0.15)",
          transition: "all 300ms ease",
          padding: "0 15px",          }}
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}
        >
          <input
            type="text"
            style={{
            flex: 1,
            height: "100%",
            border: "none",
            background: "transparent",
            color: "#fff",
            fontSize: "16px",
            outline: "none",
            }}
            value={task}
            onChange={(e) => {settask(e.target.value)
            console.log(task)
            }}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
              {task.trim()?settodo([...todo, task]):
            console.log(todo)
          } // ✅ pressing Enter adds todo
            }
          }}
            placeholder={props.text}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={hover ? "#ffffffff" : "#d2d2d2ff"}
            transform={hover ? "scale(1.1)" : "scale(1)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
            cursor: "pointer",
            backgroundClip:"text",
            transition: "transform 200ms ease, stroke 200ms ease",
            transform: hover ? "scale(1.15)" : "scale(1)",
            }}
            onClick={(e) => {task.trim()?settodo([...todo, task]): ""}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <circle cx="11" cy="11" r="6"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Input2;
