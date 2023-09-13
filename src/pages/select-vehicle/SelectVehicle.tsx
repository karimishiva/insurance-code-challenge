import styles from "./selectVehicle.module.scss";

import CustomButton from "components/common/button/CustomButton";
import ContentLayout from "layout/contentLayout/ContentLayout";
import {
  CommonLanguageDictionaryFa,
  InsuranceLanguageDictionaryFa,
} from "language";
import SelectBox from "components/common/selectBox/SelectBox";
import useSelectVehicle from "hooks/useSelectVehicle";
function SelectVehicle() {
  const {
    typeList,
    vehicleType,
    handleChangeVehicleType,
    usageList,
    vehicleUsage,
    handleChangeVehicleUsage,
    handleNavigate,
    isFetching,
  } = useSelectVehicle();
  return (
    <ContentLayout
      title={InsuranceLanguageDictionaryFa.thirdPersonInsurance}
      subTitle={InsuranceLanguageDictionaryFa.chooseVehicle}
    >
      <>
        <div className={styles.twoColumnGrid}>
          <SelectBox
            list={typeList}
            value={vehicleType}
            onChangeFn={handleChangeVehicleType}
            placeholder={InsuranceLanguageDictionaryFa.vehicleType}
            isLoading={isFetching}
          />
          <SelectBox
            list={usageList}
            value={vehicleUsage}
            onChangeFn={handleChangeVehicleUsage}
            placeholder={InsuranceLanguageDictionaryFa.vehicleUsage}
            isLoading={isFetching}
          />
        </div>
        <div className={styles.btnContainer}>
          <CustomButton
            text={CommonLanguageDictionaryFa.back}
            arrowRight
            onClickFn={() => handleNavigate("/select-insurance")}
          />
          <CustomButton
            text={CommonLanguageDictionaryFa.next}
            arrowLeft
            onClickFn={() => handleNavigate("/select-company")}
            disabled={!vehicleUsage}
          />
        </div>
      </>
    </ContentLayout>
  );
}

export default SelectVehicle;
