import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffea00"
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
