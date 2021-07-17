import { styled } from "@material-ui/core/styles";

export const InputContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
