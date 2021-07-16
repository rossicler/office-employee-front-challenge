import React from "react";

import { StepperContainer } from "./Stepper.style";

const Stepper = (props) => {
  return <StepperContainer>{props.children}</StepperContainer>;
};

export default Stepper;
