import CarSvg from "components/icons/CarSvg";
import Navbar from "components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./baseLayout.module.scss";
const BaseLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.navigation}>
        <Navbar />
      </div>
      <div className={styles.layoutContent}>
        <div className={styles.formDiv}>
          <Outlet />
        </div>
        <div className={styles.carDiv}>
          <CarSvg className={styles.carSvg} />
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
