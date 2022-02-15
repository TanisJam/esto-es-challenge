import React from "react";
import styles from "./Menu.module.scss";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../features/projects/projectsSlice";
import { useNavigate } from "react-router-dom";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { GoTriangleUp } from "react-icons/go";

export default function Menu({ isOpen, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdith = () => {
    navigate(`/edit`, { state: { id } });
  };
  const handleDelete = () => {
    dispatch(deleteProject(id));
    
  };
  return (
    <div className={styles.menu} style={{ display: isOpen ? "flex" : "none" }}>
      <div className={styles.up}>
        <GoTriangleUp />
      </div>
      <button className={styles.edit} onClick={handleEdith}>
        <RiEditBoxLine />
        Edit
      </button>
      <button className={styles.delete} onClick={handleDelete}>
        <RiDeleteBin7Line />
        Delete
      </button>
    </div>
  );
}
