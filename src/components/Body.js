import React from 'react';
import { Box, Typography } from '@mui/material';
import Data from '../assets/scpData.json';
import { Link } from 'react-router-dom';

const bodyStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Change to 'flex-start'
    minHeight: 'calc(100vh - 64px - 64px)',
    backgroundColor: '#f0f0f0',
    padding: '15px',
  };
  const entryBoxStyles = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
  };

  function getRandomEntries(data, count) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

function Body() {
  const randomEntries = getRandomEntries(Data, 6);

  return (
    <Box sx={bodyStyles}>
      <Typography variant="h2" sx={{ fontFamily: 'Cinzel Decorative, serif', color: '#333', textAlign: 'center' }}>
        SCP Foundation
      </Typography>
      <div>
        {randomEntries.map((scp, index) => (
          <div key={index} style={entryBoxStyles}>
            <h3>{scp.number}</h3>
            <h4>Object Class: {scp.objectClass}</h4>
            <p>{scp.description[0]}</p>
            <Link to={`/scp/${scp.number}`}>Read More</Link>
          </div>
        ))}
      </div>
      
    </Box>
  );
}

export default Body;
