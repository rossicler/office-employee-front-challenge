import React from "react";
import { Container } from "@material-ui/core";

import { CardContainer } from "./Card.style";

const Card = (props) => {
  return (
    <Container>
      <CardContainer>{props.children}</CardContainer>
    </Container>
  );
};

export default Card;
