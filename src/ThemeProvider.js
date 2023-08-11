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
    typography: {
      h1: {
        color: '#a81c1c', // Set the color for h1 elements
      },
      h2: {
        fontFamily: 'Cinzel Decorative, serif', 
        color: '#a81c1c', 
        textAlign: 'center'
      }
    },

  },
});

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
