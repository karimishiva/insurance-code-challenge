import styles from "./selectVehicle.module.scss";

import CustomButton from "components/common/button/CustomButton";
import ContentLayout from "layout/contentLayout/ContentLayout";
import { InsuranceLanguageDictionaryFa } from "language";
function SelectVehicle() {
  return (
    <ContentLayout
      title={InsuranceLanguageDictionaryFa.thirdPersonInsurance}
      subTitle={InsuranceLanguageDictionaryFa.chooseVehicle}
    >
      <>
        <div className={styles.twoColumnGrid}></div>
        <div className={styles.btnContainer}>
          <CustomButton text='بازگشت' arrowRight />
          <CustomButton text='مرحله بعد' arrowLeft />
        </div>
      </>
    </ContentLayout>
  );
}

export default SelectVehicle;
