import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@material-ui/core";

import TextField from "../../inputs/TextField/TextField";
import InputContainer from "../../inputs/InputContainer/InputContainer";
import { ButtonStyled } from "./LoginForm.style";

const LoginForm = (props) => {
  const { register, handleSubmit, errors } = props;

  return (
    <>
      <InputContainer>
        <TextField
          {...register("username", {
            required: true,
          })}
          label="Username"
          variant="outlined"
          error={errors.username}
          required
        />
      </InputContainer>

      <InputContainer>
        <TextField
          {...register("password", {
            required: true,
          })}
          label="Password"
          variant="outlined"
          type="password"
          error={errors.password}
          required
        />
      </InputContainer>

      <ButtonStyled
        color="primary"
        variant="contained"
        onClick={() => handleSubmit()}
      >
        <Typography variant="body1">Login</Typography>
      </ButtonStyled>
    </>
  );
};

export default LoginForm;
