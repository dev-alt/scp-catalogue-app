import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'; // Import the Box component
import Data from '../assets/scpData.json';

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 64px - 64px)',
  backgroundColor: '#f0f0f0',
  margin: '15px 15px 15px 15px', 
    padding: '15px 15px 15px 15px',
};

function SCPFiles() {
  const { scpId } = useParams();
  const scp = Data.find(item => item.number === scpId);

  return (
    <Box sx={bodyStyles}>
      <h3>{scp.number}</h3>
      <h4>Object Class: {scp.objectClass}</h4>
      <h4>special Containment Procedures:</h4>
      {scp.specialContainmentProcedures.map((Procedures) => (
        <p key={Procedures}>{Procedures}</p>
      ))}

      <h4>Description:</h4>
      {scp.description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}

      <h4>Reference:</h4>
      {scp.reference.map((ref, index) => (
        <p key={index}>{ref}</p>
      ))}
    </Box>
  );
}

export default SCPFiles;
