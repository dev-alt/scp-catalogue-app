import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a81c1c', // Customize primary color
    },
    background: {
      default: '#1b1b1b', // Customize background color
    },
    // Add other theme customizations as needed
  },
});

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
