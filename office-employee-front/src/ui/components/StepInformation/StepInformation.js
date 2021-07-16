import React from "react";
import { Container, Typography } from "@material-ui/core";

import { StepInformationContainer } from "./StepInformation.style";

const Card = ({ currentStep, maxStep }) => {
  return (
    <StepInformationContainer>
      <Typography color="primary" variant="h6">
        Personal Information:
      </Typography>
      <Typography variant="subtitle1">
        Step {currentStep} / {maxStep}
      </Typography>
    </StepInformationContainer>
  );
};

export default Card;
