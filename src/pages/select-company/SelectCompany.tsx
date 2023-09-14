import CustomButton from "components/common/button/CustomButton";
import styles from "./selectCompany.module.scss";
import ContentLayout from "layout/contentLayout/ContentLayout";
import {
  CommonLanguageDictionaryFa,
  InsuranceLanguageDictionaryFa,
} from "language";
import useSelectCompany from "hooks/useSelectCompany";
import AutoCompleteSelect from "components/common/autoCompleteSelect/AutoCompleteSelect";
const SelectCompany = () => {
  const {
    companiesList,
    isFetching,
    handleSelectCompany,
    company,
    handleNavigate,
  } = useSelectCompany();
  return (
    <ContentLayout
      title={InsuranceLanguageDictionaryFa.thirdPersonInsurance}
      subTitle={InsuranceLanguageDictionaryFa.chooseCompany}
    >
      <>
        <div className={styles.selectContainer}>
          <AutoCompleteSelect
            onChangeFn={(val: string) => handleSelectCompany(val)}
            isLoading={isFetching}
            list={companiesList}
            placeholder={InsuranceLanguageDictionaryFa.prevCompany}
          />
        </div>
        <div className={styles.btnContainer}>
          <CustomButton
            text={CommonLanguageDictionaryFa.previous}
            onClickFn={() => handleNavigate("/select-vehicle")}
            arrowRight
          />
          <CustomButton
            text={CommonLanguageDictionaryFa.next}
            onClickFn={() => handleNavigate("/select-discount")}
            arrowLeft
            disabled={!company}
          />
        </div>
      </>
    </ContentLayout>
  );
};

export default SelectCompany;
