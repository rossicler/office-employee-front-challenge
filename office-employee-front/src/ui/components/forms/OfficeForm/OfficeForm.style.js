import { styled } from "@material-ui/core/styles";

export const ButtonsContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: theme.spacing(2),
  gap: theme.spacing(3),
}));
