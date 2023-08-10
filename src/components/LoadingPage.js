import React from 'react';
import { Box, CircularProgress, Button } from '@mui/material';
import logo from '../assets/logo.png';
const LoadingPage = ({ onUnlock }) => {
  return (
    
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
         <img src={logo} alt="SCP Foundation Logo" style={{ width: '500px', marginRight: '150px' }} />
      <CircularProgress size={80} color="primary" style={{ marginTop: 20, marginRight: 100, }}/>
      <Button variant="contained" color="primary" style={{ marginTop: 20, marginRight: 100, }} onClick={onUnlock}>
        Unlock
      </Button>
    </Box>
  );
};

export default LoadingPage;
