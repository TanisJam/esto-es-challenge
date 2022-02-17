import React from "react";
import { Menu as MenuS, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import styles from "./Menu.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  filterProjects,
} from "../../features/projects/projectsSlice";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";

import Swal from "sweetalert2";

export default function Menu({ id, name }) {
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
        dispatch(filterProjects({ reset: true }));
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
    <MenuS
      menuButton={
        <MenuButton className={styles.menuButton}>
          <FiMoreVertical />
        </MenuButton>
      }
      align="end"
      arrow={true}
      menuClassName={styles.contextMenu}
      transition
    >
      <MenuItem className={styles.option} onClick={handleEdith}>
        <RiEditBoxLine />
        Edit
      </MenuItem>
      <MenuItem className={styles.option} onClick={handleDelete}>
        <RiDeleteBin7Line />
        Delete
      </MenuItem>
    </MenuS>
  );
}
