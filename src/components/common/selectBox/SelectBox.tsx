import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ArrowSvg from "components/icons/ArrowIcon";
import Skeleton from "@mui/material/Skeleton";

type propType = {
  value: string | number;
  onChangeFn: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  list: {
    value: number | string;
    label: number | string;
    id: string | number;
  }[];
};
const SelectBox = ({
  value,
  onChangeFn,
  placeholder,
  list,
  isLoading,
}: propType) => {
  const selectBoxStyle = {
    "& .muirtl-10q54uo-MuiSelect-icon": {
      width: " 20px",
      height: "10px",
      transform: "rotate(90deg)",
      color: "var(--text-grey)",
      top: "unset",
    },
    "& .muirtl-3qbkez-MuiSelect-icon": {
      width: " 20px",
      height: "10px",
      transform: "rotate(-90deg)",
      color: "var(--text-grey)",
      top: "unset",
    },
    fontWeight: "var(--font-medium)",
  };
  const labelStyle = {
    color: "var(--text-grey)",
    fontSize: "var(--text-small)",
  };
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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          {value === "" ? (
            <InputLabel
              disableAnimation
              shrink={false}
              focused={false}
              id='item_type_label'
              sx={labelStyle}
            >
              {placeholder}
            </InputLabel>
          ) : null}
          <Select
            value={value}
            onChange={(e) => onChangeFn(e.target.value.toString())}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            labelId='item_type_label'
            IconComponent={({ className }) => {
              className = className.replace("MuiSelect-iconOpen", "");
              return <ArrowSvg className={className} />;
            }}
            sx={selectBoxStyle}
          >
            {list?.map((item) => {
              return (
                <MenuItem key={item.id} value={item.value}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectBox;
