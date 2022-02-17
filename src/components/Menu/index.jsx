import React from "react";
import styles from "./Menu.module.scss";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../features/projects/projectsSlice";
import { useNavigate } from "react-router-dom";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { GoTriangleUp } from "react-icons/go";
import Swal from "sweetalert2";

export default function Menu({ isOpen, id, name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdith = () => {
    navigate(`/edit`, { state: { id } });
  };
  const handleDelete = () => {
    Swal.fire({
      title: `Are you sure you want to delete ${name}?`,
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6f9cc5",
      cancelButtonColor: "#f5222d",
      confirmButtonText: "Delete",
      showClass: {
        backdrop: "swal2-noanimation",
        popup: "",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProject(id));
        Swal.fire({
          text: `${name} has been successfully deleted`,
          icon: "success",
          showClass: {
            backdrop: "swal2-noanimation",
            popup: "",
          },
        });
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
