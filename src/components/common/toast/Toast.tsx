import React from "react";
import { ToastContainer } from "react-toastify";
import styles from "./toast.module.scss";
import "react-toastify/dist/ReactToastify.css";
export const Toast = () => {
  return (
    <ToastContainer
      rtl
      limit={6}
      position='top-right'
      className={styles.container}
      toastClassName={styles.toast}
      bodyClassName={styles.body}
      progressClassName={styles.progress}
    />
  );
};
