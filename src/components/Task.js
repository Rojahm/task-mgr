const Task = ({ task }) => {
  return (
    <div className="Task">
      <div className="border mb-3 px-4 py-1 mx-4 shadow-sm">
        <h4>{task.text}</h4>
        <p className="mb-1">{task.day}</p>
      </div>
    </div>
  );
};
export default Task;
