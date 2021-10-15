import cx from "classnames";
import styles from "./taskAdder.module.scss";
export default function TaskAdder(props) {
  const toggle = (i) => {
    const newTasks = props.tasks.map((task) => {
      const newTask = {
        ...task,
        isDone: task.id === i ? !task.isDone : task.isDone,
      };
      return newTask;
    });
    props.setTasks(newTasks);
  };

  const deleteTask = (i) => {
    const filteredTasks = props.tasks.filter((task) => task.id !== i);
    props.setTasks(filteredTasks);
  };

  return (
    <ul>
      {props.tasks.map((task) => {
        const classNames = cx({
          [styles.done]: task.isDone,
          [styles.unDone]: !task.isDone,
        });
        return (
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }} onClick={() => toggle(task.id)}>
              <input type="checkbox" checked={task.isDone} />
              <p className={classNames}>{task.body}</p>
            </div>
            <button onClick={() => deleteTask(task.id)}>
              <img src='../../../public/trash.png' />
            </button>
          </div>
        );
      })}
    </ul>
  );
}
