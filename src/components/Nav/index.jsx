import React from "react";
import styles from "./Nav.module.scss";
import logo from "../../assets/images/logo.png";
import Button from "./../Button";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brandBar}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.navBar}>
        <div className={styles.breadcrumb}>
          <h2>My projects</h2>
        </div>
        <Button>+ Add project</Button>
      </div>
    </nav>
  );
}
