import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoControls from "./TodoControls";
import TodoListItems from "./TodoListItems";
import "../App.css";


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [error, setError] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (input, dueDate) => {
    const trimmed = input.trim();
    if (!trimmed) {
      setError("Task cannot be empty.");
      return false;
    }
    if (tasks.some((task) => task.text === trimmed)) {
      setError("Task already exists.");
      return false;
    }
    setTasks([
      ...tasks,
      {
        text: trimmed,
        completed: false,
        id: Date.now(),
        dueDate: new Date(dueDate).toISOString(),
        completedAt: null,
      },
    ]);
    setError("");
    return true;
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          if (!task.completed) {
            return {
              ...task,
              completed: true,
              completedAt: new Date().toISOString(),
            };
          } else {
            return {
              ...task,
              completed: false,
              completedAt: null,
            };
          }
        }
        return task;
      })
    );
  };

  const handleFilterChange = (value) => setFilter(value);
  const handleSortChange = (value) => setSort(value);

  let displayedTasks = [...tasks];
  if (filter === "completed")
    displayedTasks = displayedTasks.filter((t) => t.completed);
  if (filter === "active")
    displayedTasks = displayedTasks.filter((t) => !t.completed);
  if (sort === "az")
    displayedTasks.sort((a, b) => a.text.localeCompare(b.text));
  if (sort === "za")
    displayedTasks.sort((a, b) => b.text.localeCompare(a.text));

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TodoForm onAddTask={handleAddTask} error={error} />
      <TodoControls
        filter={filter}
        sort={sort}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <TodoListItems
        tasks={displayedTasks}
        onToggleComplete={handleToggleComplete}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );
}

export default TodoList;
