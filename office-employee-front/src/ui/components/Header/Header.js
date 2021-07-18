import React from "react";
import { Toolbar } from "@material-ui/core";

import { AppBarStyled, TypographyStyled, ButtonStyled } from "./Header.style";

const Header = () => {
  return (
    <AppBarStyled position="static">
      <Toolbar>
        <TypographyStyled variant="h6" color="textPrimary">
          Official Employee
        </TypographyStyled>
        <ButtonStyled>Login</ButtonStyled>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
