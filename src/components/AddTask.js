import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter a Task!");
      return;
    }
    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <div className="AddTask">
      <form className="m-4 p-4" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="task" />
          Task
          <input
            id="task"
            className="form-control"
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="day" />
          Day & Time
          <input
            id="day"
            className="form-control"
            type="text"
            placeholder="Add Task's Day and Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="reminder" />
          Set Reminder
          <input
            id="reminder"
            className="ms-4"
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-dark w-100"
            value="Save Task"
          />
        </div>
      </form>
    </div>
  );
};
export default AddTask;
