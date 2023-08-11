import React from 'react';
import { Box, Typography } from '@mui/material';
import Data from '../assets/scpData.json';
import { Link } from 'react-router-dom';
import CustomThemeProvider from '../ThemeProvider'; // 

const bodyStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Change to 'flex-start'
    minHeight: 'calc(100vh - 64px - 64px)',
    backgroundColor: '#f0f0f0',
  };

function Catalog() {
  return (
    <CustomThemeProvider> {/* Wrap with your CustomThemeProvider */}
    <Box>
      <Typography variant='h2'>
       SCP Foundation Catalog
      </Typography>
      {/* variant="h2" sx={{ fontFamily: 'Cinzel Decorative, serif', color: '#333', textAlign: 'center' }} */}
      <Typography component="div" sx={{ mt: 4, textAlign: 'center' }}>
      {Data.map(scp => (
          <div key={scp.number}>
            <Link to={`/scp/${scp.number}`}>{scp.number}</Link>
          </div>
        ))}
      </Typography>
    </Box>
    </CustomThemeProvider>
  );
}

export default Catalog;
