import React from "react";
import { Toolbar } from "@material-ui/core";
import { useRouter } from "next/router";

import { AppBarStyled, TypographyStyled, ButtonStyled } from "./Header.style";

const Header = () => {
  const router = useRouter();

  return (
    <AppBarStyled position="static">
      <Toolbar>
        <TypographyStyled variant="h6" color="textPrimary">
          Official Employee
        </TypographyStyled>
        <ButtonStyled onClick={() => router.push("/login")}>Login</ButtonStyled>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
