import React from "react";
import { MenuItem } from "@material-ui/core";
import { Controller } from "react-hook-form";

import TextField from "../TextField/TextField";

const SelectField = ({
  name,
  control,
  label,
  options,
  defaultValue,
  required,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, value, ref } }) => (
        <TextField
          value={value || defaultValue || ""}
          onChange={onChange}
          inputRef={ref}
          label={label}
          variant="outlined"
          select
          error={error ? error : false}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectField;
