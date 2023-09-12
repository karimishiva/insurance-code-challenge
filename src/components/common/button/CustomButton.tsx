import ArrowSvg from "components/icons/ArrowIcon";
import styles from "./customButton.module.scss";
import clsx from "clsx";
type propType = {
  text: string;
  arrowRight?: boolean;
  arrowLeft?: boolean;
  filled?: boolean;
  disabled?: boolean;
  onClickFn?: () => void;
};
const CustomButton = ({
  text,
  arrowRight,
  arrowLeft,
  filled,
  disabled,
  onClickFn,
}: propType) => {
  return (
    <button
      className={clsx(
        styles.mainBtnStyle,
        filled ? styles.filledBtnStyle : styles.borderBtnStyle
      )}
      onClick={onClickFn}
      disabled={disabled}
    >
      {arrowRight && (
        <ArrowSvg className={clsx(styles.arrowIcon, styles.arrowIconRotate)} />
      )}
      {text}
      {arrowLeft && <ArrowSvg className={styles.arrowIcon} />}
    </button>
  );
};

export default CustomButton;
