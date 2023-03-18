const Tasks = () => {
  const tasks = [
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30pm",
      remider: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      remider: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      remider: false,
    },
  ];
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
