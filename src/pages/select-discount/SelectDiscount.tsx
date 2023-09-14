import CustomButton from "components/common/button/CustomButton";
import styles from "./selectDiscount.module.scss";
import ContentLayout from "layout/contentLayout/ContentLayout";
import {
  CommonLanguageDictionaryFa,
  InsuranceLanguageDictionaryFa,
} from "language";
import AutoCompleteSelect from "components/common/autoCompleteSelect/AutoCompleteSelect";
import useSelectDiscount from "hooks/useSelectDiscount";
import PriceModal from "components/modal/priceModal";
const SelectDiscount = () => {
  const {
    isFetching,
    selectList,
    handleSelectThirdDiscount,
    handleSelectPersonDiscount,
    thirdDiscount,
    personDiscount,
    show,
    setShow,
  } = useSelectDiscount();
  return (
    <ContentLayout
      title={InsuranceLanguageDictionaryFa.thirdPersonInsurance}
      subTitle={InsuranceLanguageDictionaryFa.chooseDiscount}
    >
      <>
        <div className={styles.selectContainer}>
          <AutoCompleteSelect
            onChangeFn={(val: string) => handleSelectThirdDiscount(val)}
            isLoading={isFetching}
            list={selectList}
            placeholder={InsuranceLanguageDictionaryFa.thirdDiscountPercent}
          />
          <AutoCompleteSelect
            onChangeFn={(val: string) => handleSelectPersonDiscount(val)}
            isLoading={isFetching}
            list={selectList}
            placeholder={InsuranceLanguageDictionaryFa.personDiscountPercent}
          />
        </div>
        <div className={styles.btnContainer}>
          <CustomButton
            text={CommonLanguageDictionaryFa.price}
            onClickFn={() => setShow(true)}
            filled
            disabled={!thirdDiscount || !personDiscount}
          />
        </div>
        {show && <PriceModal show={show} setShow={setShow} />}
      </>
    </ContentLayout>
  );
};

export default SelectDiscount;
