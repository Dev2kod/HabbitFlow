import React from "react";
import { useState, useContext } from "react";
import { TaskTodoContext } from "../context/Context";

const Input2 = (props) => {
 
  const { task, settask, todo, settodo } = useContext(TaskTodoContext);

  return (
    <>
      <div
        className="container"
        style={{
        display: "flex",
        alignItems: "center",
        marginLeft:"20vh",
        marginTop: "5vh",
        }}
      >
        <div
          
          className="searchbox"
          style={{
          display: "flex",
          alignItems:"center",
          gap:"1rem",
          width: "400px",
          height: "55px",
          borderRadius: "20px",
          transition: "all 300ms ease",
          padding: "0 15px",          }}
          
        >
          <img width="24px" height="24px" src="https://img.icons8.com/doodle/48/add.png" alt="add"/>
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
          
        </div>
      </div>
    </>
  );
};
export default Input2;
