import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CustomThemeProvider from './ThemeProvider'; // Import your CustomThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
    <App />
    </CustomThemeProvider>
  </React.StrictMode>
);


