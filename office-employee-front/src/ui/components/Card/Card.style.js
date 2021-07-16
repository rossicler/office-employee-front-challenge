import { styled } from "@material-ui/core/styles";

export const CardContainer = styled("div")(({ theme }) => ({
  flex: 1,
  backgroundColor: "white",
  maxWidth: 630,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  minHeight: 100,
  margin: "60px auto",
  padding: `${theme.spacing(2)}px ${theme.spacing(10)}px`,
}));
