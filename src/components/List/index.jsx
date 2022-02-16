import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import styles from "./List.module.scss";

export default function List() {
  const [menuOpen, setIsMenuOpen] = useState(null);

  const { projects } = useSelector((state) => state.projects);
  const { filteredProjects } = useSelector((state) => state.projects);

  const projectsToList = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <table className={styles.list}>
      <thead className={styles.header}>
        <tr>
          <td>Project info</td>
          <td> Project Manager </td>
          <td> Assiged to </td>
          <td> Status </td>
          <td> Action </td>
        </tr>
      </thead>
      <tbody>
        {projectsToList.map((project) => (
          <Card
            key={project.id}
            project={project}
            menuOpen={menuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        ))}
      </tbody>
    </table>
  );
}
