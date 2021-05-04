import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import './style.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    type: 'dark'
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);