import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

export default function TaskAdder() {
  const tasksArray = useSelector((state) => state.tasks.tasks);

  return (
    <ul style={{ backgroundColor: "rgb(172, 125, 187)" }}>
      {tasksArray.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </ul>
  );
}
