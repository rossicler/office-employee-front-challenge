import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { FormContainer } from "../../ui/styles/pages/login/index.style";
import Card from "../../ui/components/Card/Card";
import LoginForm from "../../ui/components/forms/LoginForm/LoginForm";
import Alert from "../../ui/components/Alert/Alert";
import * as employeeActions from "../../store/employee-actions";

export default function Login() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const router = useRouter();
  const dispatch = useDispatch();

  const loginHandler = (data) => {
    const { username, password } = data;
    // dispatch(employeeActions.loginEmployee(username, password))
    dispatch(employeeActions.loginEmployeeGraphQL(username, password))
      .then(() => {
        openSnackbarHandler(true, "Logged with success!");
        router.push("/profile");
      })
      .catch((err) => {
        openSnackbarHandler(false, err.response.data.error);
      });
  };

  const openSnackbarHandler = (isSuccess, message) => {
    setAlertInfo({ severity: isSuccess ? "success" : "error", message });
    setShowSnackbar(true);
  };

  const closeSnackbarHandler = (event, reason) => {
    if (reason === "clickaway") return;

    setShowSnackbar(false);
  };

  const submitHandler = () => {
    dispatch(employeeActions.addEmployee(employeeInfo))
      .then(() => {
        openSnackbarHandler(true, "Employee added with success!");
      })
      .catch((err) => {
        openSnackbarHandler(false, err.response.data.error);
      });
  };

  return (
    <Card title="LOGIN">
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbarHandler}
      >
        <Alert
          onClose={closeSnackbarHandler}
          severity={alertInfo.severity ? alertInfo.severity : "success"}
        >
          {alertInfo.message}
        </Alert>
      </Snackbar>

      <FormContainer>
        <LoginForm
          register={register}
          handleSubmit={handleSubmit(loginHandler)}
          errors={errors}
        />
      </FormContainer>
    </Card>
  );
}
