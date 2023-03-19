import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <div className="Task">
      <div className="d-flex border rounded mb-3 px-4 py-1 mx-4 shadow-sm justify-content-between">
        <div className="">
          <h4>{task.text}</h4>
          <p className="mb-1">{task.day}</p>
        </div>
        <div className="mt-3">
          <FaTimes
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </div>
    </div>
  );
};
export default Task;
