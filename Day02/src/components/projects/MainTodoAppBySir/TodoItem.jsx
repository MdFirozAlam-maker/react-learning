import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoItem = ({ task, onComplete, onDelete}) => {
  return (
    <li className="todo-item">
      <span className={task.completed ? "checkList" : "notCheckList"}>
        {task.text}
      </span>

      <button onClick={() => onComplete(task.id)} className="check-btn">
        <MdCheck />
      </button>

      <button onClick={() => onDelete(task.id)} className="delete-btn">
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoItem;
