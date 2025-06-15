import React from "react";

function TodoControls({ filter, sort, onFilterChange, onSortChange }) {
  return (
    <div className="controls">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>
    </div>
  );
}

export default TodoControls;
