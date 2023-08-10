import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const footerStyles = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#1b1b1b',
  borderTop: '2px solid #a81c1c',
};

function Footer() {
  return (
    <AppBar position="static" sx={footerStyles}>
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
