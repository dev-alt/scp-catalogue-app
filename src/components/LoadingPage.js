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
      <h1>SCP Foundation</h1>
      <img
        src={logo}
        alt="SCP Foundation Logo"
        style={{
          maxWidth: '50%',
          height: '30%',
        }}
      />
      <CircularProgress
        size={80}
        color="primary"
        style={{ marginTop: 20}}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={onUnlock}
      >
        Unlock
      </Button>
    </Box>
  );
};

export default LoadingPage;
