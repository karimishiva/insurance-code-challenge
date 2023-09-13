import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

type propType = {
  value: string | number;
  onChangeFn: (value: string) => void;
  placeholder?: string;
  list: {
    value: number | string;
    label: number | string;
    id: string | number;
  }[];
};
const SelectBox = ({ value, onChangeFn, placeholder, list }: propType) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      {value === "" ? (
        <InputLabel
          disableAnimation
          shrink={false}
          focused={false}
          id='item_type_label'
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
  );
};

export default SelectBox;
