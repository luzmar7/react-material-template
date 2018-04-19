import React from 'react'
import { 
  MuiThemeProvider,
  createMuiTheme 
} from 'material-ui/styles'
import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import CssBaseline from 'material-ui/CssBaseline'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff833a',
      main: '#e65100',
      dark: '#ac1900',
    },
    secondary: {
      light: '#ffb04c',
      main: '#f57f17',
      dark: '#bc5100',
    },
  },
});

const ThemeContainer = (Component) => {
  const WithRoot = (props) => (
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  )
  return WithRoot
}

export default ThemeContainer