import React from "react";
import Nav from "./../Nav";
import List from "./../List";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Main.module.scss";

export default function Main() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Nav />
      <main className={styles.main}>
        {isHome && <List />}
        <Outlet />
      </main>
    </>
  );
}
