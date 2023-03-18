import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
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
  ]);
  return (
    <div className="App">
      <div className="container border mt-4 shadow-sm rounded">
        <Header />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
