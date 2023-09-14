import CarSvg from "components/icons/CarSvg";
import { CommonLanguageDictionaryFa } from "language";
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import styles from "./notFound.module.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentDiv}>
        <div className={styles.errorNum}>
          {CommonLanguageDictionaryFa.notFound}
        </div>
        <span className={styles.errorTitle}>
          {CommonLanguageDictionaryFa.thePageWasNotFound}
        </span>

        <CustomButton
          filled
          text={CommonLanguageDictionaryFa.returnToSelectInsurance}
          onClickFn={() => navigate("/select-insurance")}
        />
      </div>
      <div className={styles.carDiv}>
        <CarSvg className={styles.carSvg} />
      </div>
    </div>
  );
};
export default NotFound;
