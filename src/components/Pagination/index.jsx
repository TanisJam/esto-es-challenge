import React from "react";
import styles from "./Pagination.module.scss";

export default function Pagination({ handlePagination, page }) {
  return (
    <div className={styles.container}>
      <button onClick={() => handlePagination(page - 1)}>&lsaquo;</button>

      <button className={styles.active}>{page + 1}</button>

      <button onClick={() => handlePagination(page + 1)}>&rsaquo;</button>
    </div>
  );
}
