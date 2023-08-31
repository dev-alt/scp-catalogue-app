import React from 'react';
import { Box, Typography } from '@mui/material';
import Data from '../assets/scpData.json';
import { Link } from 'react-router-dom';
import CustomThemeProvider from '../ThemeProvider'; // 


function Catalog() {
  return (
    <CustomThemeProvider> 
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
