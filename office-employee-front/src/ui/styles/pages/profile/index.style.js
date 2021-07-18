import { styled } from "@material-ui/core/styles";

export const InfoContainer = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const InfoSection = styled("div")(({ theme }) => ({
  width: "100%",
  margin: `${theme.spacing(1)}px 0`,
  paddingLeft: theme.spacing(2),
}));
