import React from "react";
import { Container, Typography } from "@material-ui/core";

import { CardContainer, CardHeader, CardContent } from "./Card.style";

const Card = (props) => {
  return (
    <Container>
      <CardContainer>
        {props.title && (
          <CardHeader>
            <Typography variant="h5">{props.title}</Typography>
          </CardHeader>
        )}
        <CardContent>{props.children}</CardContent>
      </CardContainer>
    </Container>
  );
};

export default Card;
