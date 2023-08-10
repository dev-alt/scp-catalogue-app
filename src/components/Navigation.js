import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Navigation({ isLocked }) {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        {!isLocked && ( // Only render the navigation when not locked
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/catalog" color="inherit">
              Catalog
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
