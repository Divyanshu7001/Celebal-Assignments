import React from "react";

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
  return (
    <ul className="todo-list">
      {tasks.length === 0 && <li className="empty">No tasks</li>}
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
          {task.completed ? (
            <button
              onClick={() => onToggleComplete(task.id)}
              className="resume"
            >
              Resume
            </button>
          ) : (
            <button
              onClick={() => onToggleComplete(task.id)}
              className="complete"
            >
              Complete
            </button>
          )}
          <button onClick={() => onRemoveTask(task.id)} className="remove">
            Remove
          </button>
          {task.completed && <div className="status">{getStatus(task)}</div>}
        </li>
      ))}
    </ul>
  );
}

export default TodoListItems;
