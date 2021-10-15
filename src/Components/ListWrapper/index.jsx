import { useState } from "react";
import UserInput from "../UserInput";
import TaskAdder from "../TaskAdder";
import styles from './listWrapper.module.scss'

export default function ListWrapper() {
  const [tasks, setTasks] = useState([]);
  return (
    <main className={styles.listWrapper}>
      <div className={styles.listWrapperDiv}>
        <h1 className={styles.heading}>TO DO LIST</h1>
        <UserInput tasks={tasks} setTasks={setTasks} />
        <TaskAdder tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}
