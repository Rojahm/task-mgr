import Task from "./Task";

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <div className="Tasks">
      <div className="py-4 pb-5">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onReminder={onReminder}
          />
        ))}
      </div>
    </div>
  );
};
export default Tasks;
