import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProject } from "../../features/projects/projectsSlice";
import { ErrorMessage, Form, Field, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Button from "./../Button";
import styles from "./Add.module.scss";

export default function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    description: "",
    projectManager: "",
    asignee: "",
    status: "",
  };

  const onSubmit = (values) => {
    dispatch(addProject(values));
    navigate("/");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    projectManager: Yup.string().required("Required"),
    asignee: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Project Name</label>
          <Field id="name" name="name" />
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <Field id="description" name="description" />
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="description"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="projectManager">Project Manager</label>
          <Field component="select" id="projectManager" name="projectManager">
            <option value="" disabled defaultValue hidden>
              Select a person
            </option>
            <option value="Walt Cosani">Walt Cosani</option>
            <option value="Frank Klink">Frank Klink</option>
          </Field>
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="projectManager"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="asignee">Asigned to</label>
          <Field component="select" id="asignee" name="asignee">
            <option value="" disabled defaultValue hidden>
              Select a person
            </option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
            <option value="Raul Ricardo">Raul Ricardo</option>
          </Field>
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="asignee"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <Field component="select" id="status" name="status">
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </Field>
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="status"
          />
        </div>
        <div className={styles.formGroup}>
          <Button type="submit">Create project</Button>
        </div>
      </Form>
    </FormikProvider>
  );
}
