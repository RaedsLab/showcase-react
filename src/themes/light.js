import { createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});
