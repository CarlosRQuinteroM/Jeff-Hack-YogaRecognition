import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import {
  BACKGROUND,
  PRIMARY,
  PRIMARY_TEXT,
  SECONDARY_TEXT,
  SUCCESS,
} from "./colors";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    background: {
      default: BACKGROUND,
      paper: colors.common.white,
    },
    primary: {
      contrastText: colors.common.white,
      main: PRIMARY,
    },
    success: {
      contrastText: colors.common.white,
      main: SUCCESS,
    },
    text: {
      primary: PRIMARY_TEXT,
      secondary: SECONDARY_TEXT,
    },
  },
  shadows,
  typography,
});

export default theme;
