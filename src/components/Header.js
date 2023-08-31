import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import { useTheme } from '@mui/material/styles';

function Header({ isLocked }) {
  // If the app is locked, do not render the header
  if (isLocked) {
    return null;
  }
  
// eslint-disable-next-line
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1b1b1b', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h4" sx={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: 2, color: '#a81c1c', textAlign: 'center', width: '100%' }}>
          SCP Foundation
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
