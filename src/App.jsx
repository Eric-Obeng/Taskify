import { useState } from "react";
import { Footer, TaskForm, TaskList } from "./component";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    setTasks((items) => [...items, item]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <header className="logo">
        <h1>
          TASK<span>IFY</span>
        </h1>
      </header>

      <main className="container">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onCompleteTask={completeTask}
          onDeleteTask={deleteTask}
        />
      </main>
      <footer>
        <Footer tasks={tasks} />
      </footer>
    </div>
  );
}

export default App;
