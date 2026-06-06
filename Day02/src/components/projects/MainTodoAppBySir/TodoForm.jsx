import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
   const [input, setInput] = useState("");

    const handleSubmitForm = (e) => {
      e.preventDefault();
      addTodo(input);
      setInput("");
    }
  return (
    <section className="form">
      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
        </div>
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
