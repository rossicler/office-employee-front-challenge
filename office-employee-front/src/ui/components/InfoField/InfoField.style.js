import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export const InfoField = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: `${theme.spacing(0.5)}px 0`,
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  flex: 1,
}));
