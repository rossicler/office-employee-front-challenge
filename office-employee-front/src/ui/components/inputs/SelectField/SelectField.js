import React from "react";
import { MenuItem } from "@material-ui/core";
import { Controller } from "react-hook-form";

import TextField from "../TextField/TextField";

const SelectField = ({ name, control, label, options, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref } }) => (
        <TextField
          value={value || defaultValue || ""}
          onChange={onChange}
          inputRef={ref}
          label={label}
          variant="outlined"
          select
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
