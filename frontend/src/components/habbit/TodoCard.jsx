import React from "react";

const TodoCard = (props) => {
  return (
    <div
      className="todocard"
      style={{
        display: "flex",
        color: "#030303",
        height: "15vh",
        width: "15vw",
        backgroundColor: "#00efc7ff",
        marginTop: "2vh",
        padding: "2%",
        borderRadius: "1vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: "50%",
      }}
    >
      <h3 style={{ backgroundColor: "transparent" }}>{props.item}</h3>
      <div
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          gap: "30%",
          marginTop: "10%",
        }}
      >
        <button
          style={{
            color: "#eeeeee",
            padding: "1vh 2vh",
            borderRadius: "2vh",
            cursor: "pointer",
          }}
          onClick={() => props.onDelete(props.index)}
        >
          Delte
        </button>
        <button
          style={{
            color: "#eeeeee",
            padding: "1vh 2vh",
            borderRadius: "2vh",
            cursor: "pointer",
          }}
        >
          Streak
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
