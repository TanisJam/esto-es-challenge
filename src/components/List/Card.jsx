import React from "react";
import styles from "./Card.module.scss";
import Menu from "./../Menu";
import { FiMoreVertical } from "react-icons/fi";

export default function Card({ project, menuOpen, setIsMenuOpen }) {
  const hadleMenuOpen = () => {
    if (menuOpen !== project.id) {
      setIsMenuOpen(project.id);
    } else {
      setIsMenuOpen(null);
    }
  };
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
      <td className={styles.actions}>
        <div onClick={hadleMenuOpen}>
          <FiMoreVertical />
        </div>
      </td>
      <td className={styles.menu}>
        <Menu isOpen={menuOpen === project.id} id={project.id} />
      </td>
    </tr>
  );
}
