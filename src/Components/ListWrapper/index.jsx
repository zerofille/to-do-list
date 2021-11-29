import UserInput from "../UserInput";
import TaskAdder from "../TaskAdder";
import styles from "./listWrapper.module.scss";

export default function ListWrapper() {
  return (
    <main>
      <div className={styles.listWrapper}>
        <h1 className={styles.heading}>TO DO LIST</h1>
        <UserInput />
        <TaskAdder />
      </div>
    </main>
  );
}
