import { useState } from "react";
import UserInput from "../UserInput";

const TaskAdder = ({tasks}) => {

    return <div>
        {tasks.map((task)=>{
            return 
            <div style={{display:'flex'}}><input type="checkbox"/><p>{task.body}</p></div>
        })}
    </div>
  };
 // create toggle func input checked={task.isDone} toggle will change this state
 

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

