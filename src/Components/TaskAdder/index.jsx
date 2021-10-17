import cx from "classnames";
import styles from "./taskAdder.module.scss";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className={styles.task} style={{ display: "flex" }}>
            <div style={{ display: "flex" }} onClick={() => toggle(task.id)}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={task.isDone}
              />
              <p className={classNames}>{task.body}</p>
            </div>
            <FontAwesomeIcon
              className={styles.trashIcon}
              onClick={() => deleteTask(task.id)}
              icon={faTrashAlt}
            />
          </div>
        );
      })}
    </ul>
  );
}
