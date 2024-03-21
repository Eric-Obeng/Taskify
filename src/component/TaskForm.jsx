import { useState } from "react";
import "./styles.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    onAddTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      {title && (
        <button className="btn" type="submit">
          Add Task
        </button>
      )}
    </form>
  );
}

export default TaskForm;
