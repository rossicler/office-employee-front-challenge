import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const ButtonStyled = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(2)}px ${theme.spacing(6)}px`,
  color: "white",
  width: "100%",
  marginTop: theme.spacing(3),
}));
