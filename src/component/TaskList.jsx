import PropTypes from "prop-types";
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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
