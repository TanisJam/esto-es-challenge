import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProjects } from "../../features/projects/projectsSlice";
import Card from "./Card";
import styles from "./List.module.scss";

export default function List() {
  const dispatch = useDispatch();
  const [menuOpen, setIsMenuOpen] = useState(null);
  const { projects } = useSelector((state) => state.projects);
  const { filteredProjects } = useSelector((state) => state.projects);
  const { isSearch } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(filterProjects({ reset: true }));
  }, [dispatch]);

  const projectsList = () => {
    if (!isSearch && projects.length > 0) {
      return projects.map((project) => (
        <Card
          key={project.id}
          project={project}
          setIsMenuOpen={setIsMenuOpen}
          menuOpen={menuOpen}
        />
      ));
    } else if (isSearch && filteredProjects.length > 0) {
      return filteredProjects.map((project) => (
        <Card
          key={project.id}
          project={project}
          setIsMenuOpen={setIsMenuOpen}
          menuOpen={menuOpen}
        />
      ));
    } else {
      return (
        <tr>
          <td colSpan="5">No projects found</td>
        </tr>
      );
    }
  };

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
      <tbody>{projectsList()}</tbody>
    </table>
  );
}
