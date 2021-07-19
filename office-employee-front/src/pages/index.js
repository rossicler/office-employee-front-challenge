import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import moment from "moment";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer } from "../ui/styles/pages/index.style";
import Card from "../ui/components/Card/Card";
import Stepper from "../ui/components/Stepper/Stepper";
import Step from "../ui/components/Step/Step";
import StepInformation from "../ui/components/StepInformation/StepInformation";
import PersonalForm from "../ui/components/forms/PersonalForm/PersonalForm";
import ContactForm from "../ui/components/forms/ContactForm/ContactForm";
import OfficeForm from "../ui/components/forms/OfficeForm/OfficeForm";
import PaymentForm from "../ui/components/forms/PaymentForm/PaymentForm";
import Button from "../ui/components/Button/Button";
import { ButtonsContainer } from "../ui/components/forms/Form/Form.style";
import Alert from "../ui/components/Alert/Alert";
import * as employeeActions from "../store/employee-actions";

export default function Home() {
  const maxSteps = 4;
  const [step, setStep] = useState(1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});

  const validationSchema = [
    yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      birthDay: yup.number().required(),
      birthMonth: yup.number().required(),
      birthYear: yup.number().required(),
      gender: yup.string().required(),
      username: yup.string().required(),
      password: yup.string().required(),
    }),

    yup.object({
      email: yup.string().email().required(),
      phone: yup.string().required(),
      address: yup.string().required(),
      country: yup.string().required(),
    }),

    yup.object({
      employeeId: yup.number().required(),
      designation: yup.string().required(),
      department: yup.string().required(),
      workingHours: yup.number().required(),
    }),

    yup.object({
      bankName: yup.string().required(),
      holderName: yup.string().required(),
      expiryDay: yup.number().required(),
      expiryMonth: yup.number().required(),
      expiryYear: yup.number().required(),
      paymentType: yup.string().required(),
      cardNumber: yup.number().required(),
      cvc: yup.number().required(),
    }),
  ];
  const currentValidationSchema = validationSchema[step - 1];

  const formMethods = useForm({
    shouldUnregister: false,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange",
  });
  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = formMethods;

  const dispatch = useDispatch();

  const changeStepHandler = async (newStep) => {
    const isStepValid = await trigger();
    if (isStepValid) setStep(newStep);
  };

  const openSnackbarHandler = (isSuccess, message) => {
    setAlertInfo({ severity: isSuccess ? "success" : "error", message });
    setShowSnackbar(true);
  };

  const closeSnackbarHandler = (event, reason) => {
    if (reason === "clickaway") return;

    setShowSnackbar(false);
  };

  const nextHandler = async () => {
    const isStepValid = await trigger();
    console.log(errors);
    if (isStepValid) setStep((curStep) => curStep + 1);
  };

  const backHandler = () => {
    setStep((curStep) => curStep - 1);
  };

  const submitHandler = (data) => {
    const birthDate = new Date(
      data.birthYear,
      data.birthMonth - 1, // subtracting 1 because Date works with value between 0 to 11 instead of 1 to 12
      data.birthDay
    );
    const expiryDate = new Date(
      data.expiryYear,
      data.expiryMonth,
      data.expiryDay
    );

    data.birthDate = moment(birthDate).format("YYYY-MM-DD");
    data.expiryDate = moment(expiryDate).format("YYYY-MM-DD");

    dispatch(employeeActions.addEmployee(data))
      .then(() => {
        openSnackbarHandler(true, "Employee added with success!");
      })
      .catch((err) => {
        openSnackbarHandler(false, err.response.data.error);
      });
  };

  return (
    <>
      <Card title="SIGN UP OFFICE EMPLOYEE ACCOUNT">
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
        <Stepper>
          <Step
            iconName="ti-user"
            title="Personal"
            stepActive={step === 1}
            onClick={() => changeStepHandler(1)}
          />
          <Step
            iconName="ti-email"
            title="Contact"
            stepActive={step === 2}
            onClick={() => changeStepHandler(2)}
          />
          <Step
            iconName="ti-star"
            title="Office"
            stepActive={step === 3}
            onClick={() => changeStepHandler(3)}
          />
          <Step
            iconName="ti-credit-card"
            title="Payment"
            stepActive={step === 4}
            onClick={() => changeStepHandler(4)}
          />
        </Stepper>

        <FormContainer>
          <FormProvider {...formMethods}>
            <StepInformation currentStep={step} maxStep={4}></StepInformation>
            {step === 1 && <PersonalForm />}
            {step === 2 && <ContactForm />}
            {step === 3 && <OfficeForm />}
            {step === 4 && <PaymentForm />}
            <ButtonsContainer>
              <Button
                disabled={step === 1}
                color="secondary"
                variant="contained"
                onClick={backHandler}
              >
                Previous
              </Button>
              {step === maxSteps ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit(submitHandler)}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={nextHandler}
                >
                  Next
                </Button>
              )}
            </ButtonsContainer>
          </FormProvider>
        </FormContainer>
      </Card>
    </>
  );
}
