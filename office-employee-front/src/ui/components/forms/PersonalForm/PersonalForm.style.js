import { styled } from "@material-ui/core/styles";

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
