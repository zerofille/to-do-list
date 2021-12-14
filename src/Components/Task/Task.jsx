import React, { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./task.module.scss";
import cx from "classnames";
import {useDispatch } from "react-redux";
import { removeTask } from "../../app/taskSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(false);
  const deleteTask = (id) => {
    dispatch(removeTask(id));
  };

  const classNames = cx({
    [styles.done]: isDone,
    [styles.unDone]: !isDone,
  });

  return (
    <div
      className={styles.task}
      style={{ display: "flex" }}
      onClick={() => setIsDone(!isDone)}
    >
      <div style={{ display: "flex" }}>
        <input className={styles.checkbox} type="checkbox" checked={isDone} />
        <p className={classNames}>{task.values.text}</p>
      </div>
      <FontAwesomeIcon
        className={styles.trashIcon}
        onClick={() => deleteTask(task.id)}
        icon={faTrashAlt}
      />
    </div>
  );
}

export default Task;
