import React, { useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { filterProjects } from "../../features/projects/projectsSlice";
import { AiOutlineReload } from "react-icons/ai";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(e.target.value);
    dispatch(filterProjects({ query: value }));
  };
  const handleReset = () => {
    dispatch(filterProjects({ query: "" }));
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
