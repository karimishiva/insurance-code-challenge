import Insurance from "components/icons/Insurance";
import { InsuranceLanguageDictionaryFa } from "language";
import { useNavigate } from "react-router-dom";
import styles from "./selectInsurance.module.scss";
function SelectInsurance() {
  const navigate = useNavigate();
  const listOfInsurance = [
    {
      name: InsuranceLanguageDictionaryFa.thirdPersonInsurance,
      disabled: false,
      navigate: "/select-vehicle",
      id: 1,
    },
    {
      name: InsuranceLanguageDictionaryFa.bodyInsurance,
      disabled: true,
      navigate: "/select-insurance",
      id: 2,
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <h1>{InsuranceLanguageDictionaryFa.selectInsurance}</h1>
      <div className={styles.insurancesContainer}>
        {listOfInsurance.map((insurance) => {
          return (
            <button
              className={styles.insuranceBtn}
              onClick={() => navigate(insurance.navigate)}
              disabled={insurance.disabled}
              key={insurance.id}
            >
              <Insurance className={styles.insuranceIcon} />
              <span>{insurance.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectInsurance;
