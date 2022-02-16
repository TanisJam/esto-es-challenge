import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterProjects } from "../../features/projects/projectsSlice";
import { AiOutlineReload } from "react-icons/ai";

export default function Search() {
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.projects.isSearch);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [isSearch]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(e.target.value);
    dispatch(filterProjects({ search: value }));
  };
  const handleReset = () => {
    dispatch(filterProjects({ reset: true }));
    setSearch("");
  };

  return (
    <div className={styles.searchContainer}>
      <AiOutlineReload className={styles.reloadIcon} onClick={handleReset} />
      <input
        type="text"
        placeholder="Filter"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
