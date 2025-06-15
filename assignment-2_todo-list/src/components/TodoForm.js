import React, { useState } from "react";
import { toast } from "react-toastify";

function getTomorrowStr() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function TodoForm({ onAddTask, error }) {
  const [input, setInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddTask(input, dueDate)) {
      setInput("");
      setDueDate(getTomorrowStr());
      toast.success("Task added successfully 🙌");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            style={{
              fontSize: "20px",
              fontWeight: "semibold",
              color: "#333",
              fontFamily: "'Poppins'",
            }}
            htmlFor="taskName"
          >
            Task Name:
          </label>
          <input
            id="taskName"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="form-input"
          />
        </div>
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="dueDate"
            style={{
              fontSize: "20px",
              fontWeight: "semibold",
              color: "#333",
              fontFamily: "'Poppins'",
            }}
          >
            Enter Due Date:
          </label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min={getTomorrowStr()}
            className="form-input"
            placeholder="Enter Completion Date"
            onFocus={(e) => e.target.showPicker()}
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Add Task
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </>
  );
}

export default TodoForm;
