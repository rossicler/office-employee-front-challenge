import { styled } from "@material-ui/core/styles";

export const CardContainer = styled("div")(({ theme }) => ({
  flex: 1,
  backgroundColor: "white",
  maxWidth: 630,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  minHeight: 100,
  margin: "60px auto",
  padding: `${theme.spacing(2)}px ${theme.spacing(10)}px`,
}));

export const CardHeader = styled("div")(({ theme }) => ({
  margin: "20px 0px",
  display: "flex",
  justifyContent: "center",
}));

export const CardContent = styled("div")(({ theme }) => ({
  margin: "20px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
