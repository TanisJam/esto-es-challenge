import React from "react";
import styles from "./Pagination.module.scss";

export default function Pagination({handlePagination, page}) {
  return (
    <div className={styles.container}>
      <button >&laquo;</button>

      <button>&lsaquo;</button>

      <button className={styles.active}>2</button>

      <button>&rsaquo;</button>

      <button>&raquo;</button>
    </div>
  );
}
