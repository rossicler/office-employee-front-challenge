import React from "react";
import {
  Controller,
  useFormContext,
  useController,
  get,
} from "react-hook-form";
import { MenuItem } from "@material-ui/core";

import { TextFieldStyled } from "./TextField.style";

export const TextField = ({ ...props }) => {
  const { fieldState } = useController(props);
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error.message : "";

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ref } }) => (
        <TextFieldStyled
          {...props}
          value={value}
          onChange={onChange}
          inputRef={ref}
          label={props.label}
          variant="outlined"
          error={fieldState.invalid}
        />
      )}
    />
  );
};

export const TextFieldSelect = ({ options, ...props }) => {
  const { fieldState } = useController(props);
  const { control, formState } = useFormContext();
  const error = get(formState.errors, props.name);
  const errorText = fieldState.invalid ? error.message : "";

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value, ref } }) => (
        <TextFieldStyled
          {...props}
          value={value || props.defaultValue || ""}
          onChange={onChange}
          inputRef={ref}
          label={props.label}
          variant="outlined"
          select
          error={!!errorText}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </TextFieldStyled>
      )}
    />
  );
};

export default TextFieldStyled;
