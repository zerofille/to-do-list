import { useState } from "react";
import UserInput from "../UserInput";
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

const TaskAdder = (props) => {
  const toggle = (i) => {
    const newTasks = props.tasks.map((task) => {
      const newTask = {
        ...task,
        isDone: task.id === i ? !task.id : task.id,
      };
      return newTask;
    });
    props.setTasks(newTasks);
  };
  return (
    <div onClick={(task) => toggle(task.id)}>
      <input type="checkbox" checked="{task.isDone}" /> 
      <p>{}
        
      </p>
    </div>
  );
};
