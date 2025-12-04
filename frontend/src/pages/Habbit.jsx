import React from "react";
import Todolist from "../components/habbit/Todolist";

const Habbit = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "32px",
        backgroundColor: "#030303",
      }}
    >
      <div>
        <Todolist text="Add a todo" />
      </div>
    </div>
  );
};

export default Habbit;
