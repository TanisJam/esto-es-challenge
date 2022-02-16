import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import logo from "../../assets/images/logo.png";
import { GoPlus } from "react-icons/go";
import Button from "./../Button";
import Search from "./../Search";
import { MdArrowBack } from "react-icons/md";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdd = location.pathname === "/add";
  const isEdit = location.pathname === "/edit";
  const title = () => {
    if (isAdd) {
      return "Add Project";
    } else if (isEdit) {
      return "Edit Project";
    } else {
      return "My Projects";
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.brandBar}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.navBar}>
        <div className={styles.breadcrumb}>
          {isAdd || isEdit ? (
            <Link to="/">
              <MdArrowBack /> Back
            </Link>
          ) : null}
          <h2>{title()}</h2>
        </div>
        {isAdd || isEdit ? null : (
          <Button onClick={() => navigate("/add")}>
            <GoPlus /> Add project
          </Button>
        )}
      </div>
      <Search />
    </nav>
  );
}
