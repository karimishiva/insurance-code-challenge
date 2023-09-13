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
          sx={{ borderRadius: "3px" }}
        />
      ) : (
        <Autocomplete
          disablePortal
          onChange={(event, value: { label: string } | null) => {
            onChangeFn(value?.label || "");
          }}
          options={list}
          renderInput={(params) => (
            <TextField {...params} label={placeholder} />
          )}
          popupIcon={<ArrowSvg className={styles.selectIcon} />}
          noOptionsText={CommonLanguageDictionaryFa.noOption}
        />
      )}
    </>
  );
};

export default AutoCompleteSelect;
