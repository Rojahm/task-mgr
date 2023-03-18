const Task = ({ task }) => {
  return (
    <div className="Task">
      <div className="border mb-3 px-4 py-1 mx-4 shadow-sm">
        <h4>{task.text}</h4>
      </div>
    </div>
  );
};
export default Task;
