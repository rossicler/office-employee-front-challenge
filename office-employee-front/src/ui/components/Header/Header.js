import React from "react";
import { Toolbar } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  AppBarStyled,
  TypographyStyled,
  LinkStyled,
  ButtonStyled,
} from "./Header.style";
import * as employeeActions from "../../../store/employee-actions";

const Header = () => {
  const token = useSelector((state) => state.employees.employeeToken);
  const router = useRouter();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(employeeActions.logoutEmployee());
    router.push("/login");
  };

  return (
    <AppBarStyled position="static">
      <Toolbar>
        <LinkStyled href="#" underline="none" onClick={() => router.push("/")}>
          <TypographyStyled variant="h6" color="textPrimary">
            Office Employee
          </TypographyStyled>
        </LinkStyled>
        {!token ? (
          <ButtonStyled onClick={() => router.push("/login")}>
            Login
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={() => logoutHandler()}>Logout</ButtonStyled>
        )}
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
