import {  createTheme, ThemeProvider, } from '@material-ui/core';
import AppContainer from './components/AppContainer';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

const  App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
