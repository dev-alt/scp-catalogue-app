import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1b1b1b', boxShadow: 'none', borderTop: '2px solid #a81c1c' }}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: 'Cinzel Decorative, serif', letterSpacing: 2, color: '#a81c1c' }}>
          SCP Foundation
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b6b6b' }}>
          Secure, Contain, Protect
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
