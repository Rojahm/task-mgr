const Tasks = ({ tasks }) => {
  return (
    <div className="Tasks">
      <div className=" px-5 py-5">
        {tasks.map((task) => (
          <h4 className="border p-2 shadow-sm" key={task.id}>
            {task.text}
          </h4>
        ))}
      </div>
    </div>
  );
};
export default Tasks;
