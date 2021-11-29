import React, { useState } from "react";
import cx from "classnames";
import styles from "./taskAdder.module.scss";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../app/taskSlice";

export default function TaskAdder() {
  const dispatch = useDispatch();
  const tasksArray = useSelector((state) => state.tasks.tasks);
  const [isDone, setIsDone] = useState(false);
  const deleteTask = (i) => {
    dispatch(removeTask(i));
  };
  const classNames = cx({
    [styles.done]: isDone,
    [styles.unDone]: !isDone,
  });
  return (
    <ul>
      {tasksArray.map((task) => {
        return (
          <div
            className={styles.task}
            style={{ display: "flex" }}
            onClick={() => setIsDone(!isDone)}
          >
            <div style={{ display: "flex" }}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={isDone}
              />
              <p className={classNames}>{task.values.text}</p>
            </div>
            <FontAwesomeIcon
              className={styles.trashIcon}
              onClick={deleteTask}
              icon={faTrashAlt}
            />
          </div>
        );
      })}
    </ul>
  );
}
