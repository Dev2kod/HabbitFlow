import React, { useContext } from "react";
import Searchbar from "../Searchbar";
import { TaskTodoContext } from "../../context/Context";
import Input2 from "../Input2";
import TodoCard from "./TodoCard";

const Todolist = () => {
  const { todo, settodo } = useContext(TaskTodoContext);
 
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input2 text="add a todo" />

        <div
          style={{
            marginTop: "2vh",
            backgroundColor: "transparent",
            color: "#eeeeee",
            display: "flex",
            flexWrap: "wrap",
            gap: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {todo.map((item, index) => (
            <TodoCard key={index} index={index} body={item} title={item}/>            
      ))}
        </div>
      </div>
    </>
  );
};

export default Todolist;
