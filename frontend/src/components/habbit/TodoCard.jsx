import { useState } from "react";
import DarkButton from "../DarkButton";
import { TaskTodoContext } from "../../context/Context";
import { useContext } from "react";
const TodoCard = (props) => {
  const { todo, settodo } = useContext(TaskTodoContext);
  const [hovered, setHovered] = useState(false);
  const handleDelete = (index) => {
    settodo(todo.filter((_, i) => i !== index));
  };
  return (
    <div
      className="flex items-center gap-4 p-4 bg-amber-100 rounded-lg hover:bg-amber-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-around flex-1">
        <div className="flex gap-2 flex-1">
          <div className="flex gap-2">
            <div onClick={() => handleDelete(props.index)}>
              <img
                src="./tick.png"
                alt=""
              />
            </div>
            <div>
              <DarkButton />
            </div>
          </div>
          <div>{props.body}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
