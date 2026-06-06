import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <section className="myUnOrdList">
      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
