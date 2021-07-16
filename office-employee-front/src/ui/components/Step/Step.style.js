import { styled } from "@material-ui/core/styles";

export const StepContainer = styled("div")(({ theme, active }) => ({
  backgroundColor: active
    ? theme.palette.primary.main
    : theme.palette.grey[400],
  width: 90,
  height: 90,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 7,
  color: "white",
}));

export const Icon = styled("span")(({ theme }) => ({
  fontSize: 29,
}));
