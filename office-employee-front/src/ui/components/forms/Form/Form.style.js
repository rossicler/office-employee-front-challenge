import { styled } from "@material-ui/core/styles";

export const FormStyled = styled("div")(({ theme }) => ({
  padding: `${theme.spacing(2)}px 0`,
}));

export const DateContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const DateInputsContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  minWidth: 280,
}));

export const ColumnContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
}));

export const ButtonsContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: theme.spacing(2),
  gap: theme.spacing(3),
}));
