import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import moment from "moment";

import { FormContainer } from "../ui/styles/pages/index.style";
import Card from "../ui/components/Card/Card";
import Stepper from "../ui/components/Stepper/Stepper";
import Step from "../ui/components/Step/Step";
import StepInformation from "../ui/components/StepInformation/StepInformation";
import PersonalForm from "../ui/components/forms/PersonalForm/PersonalForm";
import ContactForm from "../ui/components/forms/ContactForm/ContactForm";
import OfficialForm from "../ui/components/forms/OfficialForm/OfficialForm";
import PaymentForm from "../ui/components/forms/PaymentForm/PaymentForm";
import Alert from "../ui/components/Alert/Alert";
import * as employeeActions from "../store/employee-actions";

export default function Home() {
  const [step, setStep] = useState(1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertInfo, setAlertInfo] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [contactData, setContactData] = useState({});
  const [officialData, setOfficialData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const dispatch = useDispatch();

  const changeStepHandler = (newStep) => {
    //TODO Verify validity before changing step
    setStep(newStep);
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
    const birthDate = new Date(
      personalData.birthYear,
      personalData.birthMonth - 1, // subtracting 1 because Date works with value between 0 to 11 instead of 1 to 12
      personalData.birthDay
    );
    const expiryDate = new Date(
      paymentData.expiryYear,
      paymentData.expiryMonth,
      paymentData.expiryDay
    );

    const employeeInfo = {
      ...personalData,
      ...contactData,
      ...officialData,
      ...paymentData,
      birthDate: moment(birthDate).format("YYYY-MM-DD"),
      expiryDate: moment(expiryDate).format("YYYY-MM-DD"),
    };
    dispatch(employeeActions.addEmployee(employeeInfo))
      .then(() => {
        openSnackbarHandler(true, "Employee added with success!");
      })
      .catch((err) => {
        console.log(err);
        openSnackbarHandler(
          false,
          "Error, username or email is already in use!"
        );
      });
  };

  return (
    <>
      <Card title="SIGN UP OFFICE EMPLOYEE ACCOUNT">
        <Snackbar
          open={showSnackbar}
          autoHideDuration={5000}
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
            title="Official"
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
          <StepInformation currentStep={step} maxStep={4}></StepInformation>
          {step === 1 && (
            <PersonalForm
              changeStepHandler={changeStepHandler}
              personalData={personalData}
              setPersonalData={setPersonalData}
            />
          )}
          {step === 2 && (
            <ContactForm
              changeStepHandler={changeStepHandler}
              contactData={contactData}
              setContactData={setContactData}
            />
          )}
          {step === 3 && (
            <OfficialForm
              changeStepHandler={changeStepHandler}
              officialData={officialData}
              setOfficialData={setOfficialData}
            />
          )}
          {step === 4 && (
            <PaymentForm
              changeStepHandler={changeStepHandler}
              paymentData={paymentData}
              setPaymentData={setPaymentData}
              submitHandler={submitHandler}
            />
          )}
        </FormContainer>
      </Card>
    </>
  );
}
