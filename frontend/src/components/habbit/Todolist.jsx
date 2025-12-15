import React, { useContext } from "react";
import Searchbar from "../Searchbar";
import { TaskTodoContext } from "../../context/Context";
import Input2 from "../Input2";
import TodoCard from "./TodoCard";

const Todolist = () => {
  const { todo, settodo } = useContext(TaskTodoContext);

  return (
    <>
      <div
        className="hero"
        style={{
          fontFamily: "'Algance', sans-serif",
          color: "#eeeeee",
          marginTop: "2vh",
          display: "flex",
          alignItems: "center",
          marginLeft: "20vh",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        <div style={{ fontFamily: "'Algance', sans-serif" }}>
          Track Your{" "}
          <span
            className="name"
            style={{ fontFamily: "'Algance', sans-serif", color: "#00c9a7" }}
          >
            Habbits
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "2vh",
          backgroundColor: "transparent",
          color: "#eeeeee",
          display: "flex",
          flexDirection: "column",
          gap: "5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {todo.map((item, index) => (
          <TodoCard key={index} index={index} body={item} title={item} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input2 text="add a todo" />
      </div>
    </>
  );
};

export default Todolist;
