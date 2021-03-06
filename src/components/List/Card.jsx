import React from "react";
import styles from "./Card.module.scss";
import Menu from "./../Menu";

export default function Card({ project }) {
  return (
    <tr className={styles.card}>
      <td>
        <div className={styles.header}>
          <h3>{project.name}</h3>
          <small>
            Creation date: {project.createdDate} {project.createdHour}
          </small>
        </div>
      </td>
      <td>
        <div className={styles.projectManager}>
          <img
            src={project.projectManager.avatar}
            alt={project.projectManager.name}
            className={styles.avatar}
          />
          <p>{project.projectManager.name}</p>
        </div>
      </td>
      <td>
        <div className={styles.asignee}>
          <img
            src={project.asignee.avatar}
            alt={project.asignee.name}
            className={styles.avatar}
          />
          <p>{project.asignee.name}</p>
        </div>
      </td>
      <td>
        <div className={styles.status}>
          <p>{project.status}</p>
        </div>
      </td>
      <td className={styles.menu}>
        <Menu id={project.id} name={project.name} />
      </td>
    </tr>
  );
}
