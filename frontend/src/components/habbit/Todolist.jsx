import React, { useContext } from "react";
import Searchbar from "../Searchbar";
import { TaskTodoContext } from "../../context/Context";
import Input from "../input";
import TodoCard from "./TodoCard";

const Todolist = () => {
  const { todo, settodo } = useContext(TaskTodoContext);
  const handleDelete = (index) => {
    settodo(todo.filter((_, i) => i !== index));
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input text="add a todo" />

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
          {todo.map((item, index) => {
            return (
              <div
                className="maptodo"
                key={index}
                style={{ backgroundColor: "transparent", display: "flex" }}
              >
                <TodoCard
                  key={index}
                  item={item}
                  index={index}
                  onDelete={handleDelete}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todolist;
