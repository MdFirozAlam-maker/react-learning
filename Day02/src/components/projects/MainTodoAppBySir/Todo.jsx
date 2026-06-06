import {useEffect, useState } from "react";
import "./Todo.css";
import { v4 as uuidv4} from "uuid"
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Clock from "./Clock";
export const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

  const addTodo = (inputValue) => {
    if (!inputValue.trim()) return;

    const trimmedValue = inputValue.trim().toLowerCase();

    if (tasks.some((task) => task.text.toLowerCase() === trimmedValue)) {
      return;
    }

    const newTask = {
      text: inputValue.trim(),
      id: uuidv4(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };



  //handle delete

  const handleDelete = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  };

  const handleComplete = (id) => {
    const taskUpdate = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(taskUpdate);
  };
  return (
    <section className="todo-container">
      <Clock />
      <TodoForm addTodo={addTodo} />
      <TodoList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </section>
  );
};
