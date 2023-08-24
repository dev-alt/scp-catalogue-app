import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Navigation({ isLocked, scpEntries }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        {!isLocked && (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button
              aria-controls="catalog-menu"
              aria-haspopup="true"
              onMouseEnter={handleMenuOpen}
              color="inherit"
            >
              Catalog
            </Button>
            <Menu
              id="catalog-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              onMouseLeave={handleMenuClose}
            >
              {scpEntries.map((entry) => (
                <MenuItem
                  key={entry.number}
                  component={Link}
                  to={`/scp/${entry.number}`}
                  onClick={handleMenuItemClick}
                >
                  {entry.number}
                </MenuItem>
              ))}
            </Menu>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/addEntry" color="inherit">
              Add Entry
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
