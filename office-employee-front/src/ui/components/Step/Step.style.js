import { styled } from "@material-ui/core/styles";

export const StepContainer = styled("div")(({ theme, ...others }) => ({
  width: 90,
  height: 90,
  borderRadius: 7,
  color: "white",
}));

export const StepButton = styled("a")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Icon = styled("span")(({ theme }) => ({
  fontSize: 29,
}));
