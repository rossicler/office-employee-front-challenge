import { styled } from "@material-ui/core/styles";

export const Form = styled("form")(({ theme }) => ({
  padding: `${theme.spacing(2)}px 0`,
}));

export const InputContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const BirthDateContainer = styled("div")(({ theme }) => ({
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
