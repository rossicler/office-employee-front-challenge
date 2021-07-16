import React from "react";

import { StepContainer, Icon } from "./Step.style";

const Step = (props) => {
  return (
    <StepContainer active={props.active}>
      <Icon>
        <i className={props.iconName}></i>
      </Icon>
      <span>{props.title}</span>
    </StepContainer>
  );
};

export default Step;
