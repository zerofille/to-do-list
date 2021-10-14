import { useState } from "react";
import UserInput from "../UserInput";
import TaskAdder from "../TaskAdder";

export default function ListWrapper() {
  const [tasks, setTasks] = useState([]);
  return (
    <main>
      <div style={{ backgroundColor: "beige" }}>
        <h1 style={{ textAlign: "center" }}>TO DO LIST</h1>
        <UserInput tasks={tasks} setTasks={setTasks} />
        <TaskAdder tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}
