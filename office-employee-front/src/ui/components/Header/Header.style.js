import { styled } from "@material-ui/core/styles";
import { AppBar, Typography, Button } from "@material-ui/core";

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[50],
}));

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[50],
  flexGrow: 1,
}));
