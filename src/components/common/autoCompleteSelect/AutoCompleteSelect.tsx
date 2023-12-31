import styles from "./autoCompleteSelect.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Skeleton from "@mui/material/Skeleton";
import ArrowSvg from "components/icons/ArrowIcon";
import { CommonLanguageDictionaryFa } from "language";

type propT = {
  list: { label: string }[];
  placeholder: string;
  onChangeFn: (value: string) => void;
  isLoading?: boolean;
};
const AutoCompleteSelect = ({
  placeholder,
  list,
  onChangeFn,
  isLoading,
}: propT) => {
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          height={56}
          animation='wave'
          sx={{ borderRadius: "3px", width: "100%" }}
        />
      ) : (
        <Autocomplete
          disablePortal
          blurOnSelect={false}
          className={styles.selector}
          onChange={(_, value: { label: string } | null) => {
            onChangeFn(value?.label || "");
          }}
          options={list}
          renderInput={(params) => (
            <TextField
              {...params}
              label={placeholder}
              InputLabelProps={{ className: styles.selectLabel }}
            />
          )}
          popupIcon={<ArrowSvg className={styles.selectIcon} />}
          noOptionsText={CommonLanguageDictionaryFa.noOption}
          isOptionEqualToValue={(option, value) =>
            option.label === value.label || value === undefined
          }
        />
      )}
    </>
  );
};

export default AutoCompleteSelect;
