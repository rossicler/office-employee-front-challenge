import React from "react";

import { InfoField, InfoLabel, InfoText } from "./InfoField.style";

const InfoFieldStyled = ({ label, text }) => {
  return (
    <InfoField>
      <InfoLabel>{label}:</InfoLabel>
      <InfoText>{text}</InfoText>
    </InfoField>
  );
};

export default InfoFieldStyled;
