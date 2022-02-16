import React from "react";
import styles from "./Menu.module.scss";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../features/projects/projectsSlice";
import { useNavigate } from "react-router-dom";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { GoTriangleUp } from "react-icons/go";
import swal from "sweetalert";

export default function Menu({ isOpen, id, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdith = () => {
    navigate(`/edit`, { state: { id } });
  };
  const handleDelete = () => {
    swal({
      title: `Are you sure you want to delete ${name}?`,
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProject(id));
        swal(`${name} has been successfully deleted.`, {
          icon: "success",
        });
      } else {
        swal(`${name} has not been deleted.`);
      }
    });
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
