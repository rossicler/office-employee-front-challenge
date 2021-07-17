import React, { useState } from "react";

import { FormContainer } from "../ui/styles/pages/index.style";
import Card from "../ui/components/Card/Card";
import Stepper from "../ui/components/Stepper/Stepper";
import Step from "../ui/components/Step/Step";
import StepInformation from "../ui/components/StepInformation/StepInformation";
import PersonalForm from "../ui/components/forms/PersonalForm/PersonalForm";

export default function Home() {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({});

  const changeStepHandler = (newStep) => {
    // Verify validity before changing step
    setStep(newStep);
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
      </FormContainer>
    </Card>
  );
}
