import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProjects,
  getProjects,
} from "../../features/projects/projectsSlice";
import Card from "./Card";
import Pagination from "./../Pagination";
import styles from "./List.module.scss";

export default function List() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = useSelector((state) => state.projects.totalPages);
  const { projects } = useSelector((state) => state.projects);
  const { filteredProjects } = useSelector((state) => state.projects);
  const { isSearch } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects({ page: currentPage }));
  }, [dispatch, currentPage]);
  const handlePagination = (page) => {
    if (page < 0) return;
    if (page >= totalPages) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(filterProjects({ reset: true }));
  }, [dispatch]);

  const projectsList = () => {
    if (!isSearch && projects.length > 0) {
      return projects.map((project) => (
        <Card key={project.id} project={project} />
      ));
    } else if (isSearch && filteredProjects.length > 0) {
      return filteredProjects.map((project) => (
        <Card key={project.id} project={project} />
      ));
    } else {
      return (
        <tr>
          <td colSpan="5" style={{ padding: "2rem" }}>
            No projects found
          </td>
        </tr>
      );
    }
  };

  return (
    <>
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
      <Pagination page={currentPage} handlePagination={handlePagination} />
    </>
  );
}
