import React, { useEffect, useState } from "react";
import "./TodoApp.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [filter, setFilter] = useState("all");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [tasks, setTask] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD / UPDATE
  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId) {
      setTask(
        tasks.map((task) =>
          task.id === editId
            ? { ...task, text: input, dueDate, priority }
            : task
        )
      );
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
        dueDate,
        priority,
      };
      setTask([...tasks, newTask]);
    }

    setInput("");
    setDueDate("");
    setPriority("Medium");
    setFilter("all");
  };

  // EDIT
  const handleEdit = (id) => {
    const t = tasks.find((task) => task.id === id);
    setInput(t.text);
    setDueDate(t.dueDate || "");
    setPriority(t.priority || "Medium");
    setEditId(id);
  };

  // DELETE
  const handleDelete = (id) => {
    setTask(tasks.filter((t) => t.id !== id));
  };

  // TOGGLE
  const toggleComplete = (id) => {
    setTask(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // CLEAR
  const handleClearAll = () => setTask([]);

  const handleClearCompleted = () => {
    setTask(tasks.filter((t) => !t.completed))
  }

  // DRAG & DROP
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setTask(items);
  };

  // FILTER + SEARCH
  const filteredTasks = tasks
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    });

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="container">
      <h1>Todo App 🚀</h1>

      {/* INPUT BAR */}
      <div className="input-bar">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        {/* Premium Inline Button */}
        <button className="custom-add-btn" onClick={handleAdd}>
          <span className="btn-text">{editId ? "Update Task" : "Add Task"}</span>
          <span className="btn-icon">{editId ? "✏️" : "✨"}</span>
        </button>
      </div>

      {/* SEARCH */}
      <input
        className="search-input"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTERS */}
      <div className="filters">
        <button 
          className={filter === "all" ? "active" : ""} 
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button 
          className={filter === "completed" ? "active" : ""} 
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button 
          className={filter === "pending" ? "active" : ""} 
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {/* COUNTS */}
      {tasks.length > 0 && (
        <div className="task-counts">
          <p>Pending: {pendingCount}</p>
          <p>Completed: {completedCount}</p>
        </div>
      )}

      {/* DRAG & DROP LIST */}
      {filteredTasks.length > 0 ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                className="task-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`task-item ${task.completed ? "completed" : ""} ${
                          snapshot.isDragging ? "dragging" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="task-content">
                          <span>{task.text}</span>
                          <p className="due-date">Due: {task.dueDate || "No Date"}</p>
                          <p className={`priority ${task.priority}`}>{task.priority}</p>
                        </div>
                        <div className="task-actions">
                          <button className="complete-btn" onClick={() => toggleComplete(task.id)}>
                            {task.completed ? "Undo" : "Complete"}
                          </button>
                          <button className="edit-btn" onClick={() => handleEdit(task.id)}>
                            Edit
                          </button>
                          <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <p className="empty-msg">No tasks found 🚀</p>
      )}

      {/* CLEAR */}
     {/* CLEAR ACTIONS */}
      {tasks.length > 0 && (
        <div className="clear-actions">
          {/* Only show this button if there are actually completed tasks to clear */}
          {completedCount > 0 && (
            <button className="clear-btn outline" onClick={handleClearCompleted}>
              Clear Completed
            </button>
          )}
          
          <button className="clear-btn danger" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoApp;