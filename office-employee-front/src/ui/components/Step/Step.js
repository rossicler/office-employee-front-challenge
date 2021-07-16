import React from "react";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { StepContainer, Icon, StepButton } from "./Step.style";

const Step = (props) => {
  const theme = useTheme();

  return (
    <StepContainer
      style={{
        backgroundColor: props.stepActive
          ? theme.palette.primary.main
          : theme.palette.grey[400],
      }}
    >
      <StepButton href="#" onClick={props.onClick}>
        <Icon>
          <i className={props.iconName}></i>
        </Icon>
        <Typography variant="body2">{props.title}</Typography>
      </StepButton>
    </StepContainer>
  );
};

export default Step;
