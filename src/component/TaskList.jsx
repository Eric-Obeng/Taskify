import Task from "./Task";

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <div className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onComplete={() => onCompleteTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
