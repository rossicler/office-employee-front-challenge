import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FormContainer } from "../ui/styles/pages/index.style";
import Card from "../ui/components/Card/Card";
import Stepper from "../ui/components/Stepper/Stepper";
import Step from "../ui/components/Step/Step";
import StepInformation from "../ui/components/StepInformation/StepInformation";
import PersonalForm from "../ui/components/forms/PersonalForm/PersonalForm";
import ContactForm from "../ui/components/forms/ContactForm/ContactForm";
import OfficialForm from "../ui/components/forms/OfficialForm/OfficialForm";
import PaymentForm from "../ui/components/forms/PaymentForm/PaymentForm";
import * as employeeActions from "../store/employee-actions";

export default function Home() {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({});
  const [contactData, setContactData] = useState({});
  const [officialData, setOfficialData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const dispatch = useDispatch();

  const changeStepHandler = (newStep) => {
    // Verify validity before changing step
    setStep(newStep);
  };

  const submitHandler = () => {
    const employeeInfo = {
      personalInfo: personalData,
      contactInfo: contactData,
      officialInfo: officialData,
      paymentInfo: paymentData,
    };
    dispatch(employeeActions.addEmployee(employeeInfo));
  };

  return (
    <Card title="SIGN UP OFFICE EMPLOYEE ACCOUNT">
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
  );
}
