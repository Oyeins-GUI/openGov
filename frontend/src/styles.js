import { makeStyles } from "@mui/styles";
import theme from "./theme";

const useStyles = makeStyles(() => ({
   logo: {
      cursor: "pointer",
      color: theme.palette.primary.main,
   },
}));

export default useStyles;
