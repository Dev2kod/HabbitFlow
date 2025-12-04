import { useState } from 'react'
import DarkButton from '../DarkButton';
import { TaskTodoContext } from "../../context/Context";
import { useContext } from 'react';
const TodoCard = (props) => {
    const { todo, settodo } = useContext(TaskTodoContext);
  const [hovered, setHovered] = useState(false);
   const handleDelete = (index) => {
    settodo(todo.filter((_, i) => i !== index));
  };
  return (
    <div
      className="card"
      style={{
        marginTop: "3vh",
        border: hovered ? "0.3vh solid #00efc7ff" : "0.1vh solid #eeeeee",
        borderRadius: "5%",
        width: "20vw",          // responsive width
        height: "35vh",         // responsive height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5%",
        transition: "0.3s ease-in-out",
        transform: hovered ? "scale(1.05)" : "none"
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {hovered ? (
          <div
            style={{
              fontFamily: "'Algance', sans-serif",
              fontSize: "2.5vh",   // scales with viewport height
            }}
          >
            <div>{props.body}</div>
            <DarkButton onClick={()=>handleDelete(props.index) } text="delete"/>

          </div>
        ) : (
          <div
            style={{
              fontFamily: "'Algance', sans-serif",
              fontSize: "2.5vh",
              transition: "0.3s ease-in-out"
            }}
          >
            {props.title}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoCard
