import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5a6a8c",
      main: "#314570",
      dark: "#172136",
      contrastText: "#fff",
    },
    secondary: blue,
    tertiary: {
      light: "#fc8854",
      main: "#FC6B2A",
      dark: "#b04a1d",
    },
  },
  typography: {
    fontFamily: "PT Sans",
  },
});

export default theme;
