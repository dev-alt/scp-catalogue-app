import React from 'react';
import { Box, Typography } from '@mui/material';

const bodyStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 64px - 64px)', // Adjust for header and footer height
  backgroundColor: '#f0f0f0',
};

function Body() {
  return (
    <Box sx={bodyStyles}>
      <Typography variant="h2" sx={{ fontFamily: 'Cinzel Decorative, serif', color: '#333', textAlign: 'center' }}>
        SCP Foundation
      </Typography>
    </Box>
  );
}

export default Body;
