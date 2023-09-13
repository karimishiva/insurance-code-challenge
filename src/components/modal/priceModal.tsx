import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  CommonLanguageDictionaryFa,
  RegisterLanguageDictionaryFa,
  InsuranceLanguageDictionaryFa,
} from "language";
import styles from "./priceModal.module.scss";
import { useSelector } from "react-redux";
import { userInfo, thirdInsuranceStore } from "types/types";
import CustomButton from "components/common/button/CustomButton";
type propT = {
  show: boolean;
  setShow: (value: boolean) => void;
};
const PriceModal = ({ show, setShow }: propT) => {
  const { userInfo, insurance } = useSelector(
    (state: { users: userInfo; insurance: thirdInsuranceStore }) => {
      return {
        userInfo: state.users,
        insurance: state.insurance,
      };
    }
  );
  const infoList = [
    {
      title: RegisterLanguageDictionaryFa.firstName,
      value: userInfo.firstName,
    },
    { title: RegisterLanguageDictionaryFa.lastName, value: userInfo.lastName },
    {
      title: InsuranceLanguageDictionaryFa.selectInsurance,
      value: InsuranceLanguageDictionaryFa.thirdPerson,
    },
    {
      title: InsuranceLanguageDictionaryFa.vehicleType,
      value: insurance.vehicle.type,
    },
    {
      title: InsuranceLanguageDictionaryFa.vehicleUsage,
      value: insurance.vehicle.usage,
    },
    {
      title: InsuranceLanguageDictionaryFa.prevCompany,
      value: insurance.company,
    },
    {
      title: InsuranceLanguageDictionaryFa.thirdDiscountPercent,
      value: insurance.discount.insurance,
    },
    {
      title: InsuranceLanguageDictionaryFa.personDiscountPercent,
      value: insurance.discount.person,
    },
  ];
  return (
    <Modal
      open={show}
      onClose={() => setShow(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      closeAfterTransition
    >
      <Fade in={show}>
        <div className={styles.mainContainer}>
          <h2 id='modal-modal-title'>{CommonLanguageDictionaryFa.price}</h2>
          <div id='modal-modal-description' className={styles.modalDesc}>
            {infoList.map((item) => {
              return (
                <div key={item.title} className={styles.eachItemStyle}>
                  <span className={styles.titleStyle}>{item.title}</span> :{" "}
                  <span className={styles.valueStyle}>{item.value || "-"}</span>
                </div>
              );
            })}
          </div>
          <CustomButton
            filled
            onClickFn={() => setShow(false)}
            text={CommonLanguageDictionaryFa.close}
          />
        </div>
      </Fade>
    </Modal>
  );
};
export default PriceModal;
