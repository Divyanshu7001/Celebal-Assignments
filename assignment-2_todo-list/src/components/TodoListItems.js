import React from "react";
import { toast } from "react-toastify";
function getStatus(task) {
  if (!task.completed || !task.completedAt) return null;
  const due = new Date(task.dueDate);
  const completed = new Date(task.completedAt);
  if (
    completed.getFullYear() === due.getFullYear() &&
    completed.getMonth() === due.getMonth() &&
    completed.getDate() === due.getDate()
  ) {
    return "Good Job 👍";
  } else if (completed < due) {
    return "Completed before 🤝";
  } else {
    return "Late completion 🤦‍♂️";
  }
}

function TodoListItems({ tasks, onToggleComplete, onRemoveTask }) {
  const handleToggleComplete = (id, completed) => {
    onToggleComplete(id);
    if (completed) {
      toast.success("Task Resumed again 📝");
    } else {
      toast.success("Task completed successfully 👌");
    }
  };

  const handleRemoveTask = (id) => {
    onRemoveTask(id);
    toast.success("Task Removed ❌");
  };

  return (
    <ul className="todo-list">
      {tasks.length === 0 && <li className="empty">No tasks</li>}
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => handleToggleComplete(task.id, task.completed)}>
            {task.text}
          </span>
          {task.completed ? (
            <button
              onClick={() => handleToggleComplete(task.id, task.completed)}
              className="resume"
            >
              Resume
            </button>
          ) : (
            <button
              onClick={() => handleToggleComplete(task.id, task.completed)}
              className="complete"
            >
              Complete
            </button>
          )}
          <button onClick={() => handleRemoveTask(task.id)} className="remove">
            Remove
          </button>
          {task.completed && <div className="status">{getStatus(task)}</div>}
        </li>
      ))}
    </ul>
  );
}

export default TodoListItems;
