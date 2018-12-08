import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: grey[300],
      main: grey[500],
      dark: '#000'
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: '#000'
    }
  },
  typography: {
    useNextVariants: true
  }
});
