import React from "react";
import "./styles.css";

function Task({ task, onComplete, onDelete }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        value={task.completed}
        onChange={() => onComplete(task.id)}
        className="btn"
        title="Mark As Completed"
      />
      <span
        style={
          task.completed
            ? { textDecoration: "line-through", color: "#95a5a6" }
            : {}
        }
      >
        {task.title}
      </span>
      <button className="btn" title="Delete" onClick={() => onDelete(task.id)}>
        ❌
      </button>
    </div>
  );
}

export default Task;
