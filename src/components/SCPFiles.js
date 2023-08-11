import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'; // Import the Box component
import Data from '../assets/scpData.json';

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 64px - 64px)',
  backgroundColor: '#f0f0f0',
  margin: '15px 15px 15px 15px',
  padding: '15px 15px 15px 15px',
  lineHeight: 1,
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

      {scp.reference && scp.reference.length > 0 && (
        <div>
          <h4>Reference:</h4>
          {scp.reference.map((ref, index) => (
            <p key={index}>{ref}</p>
          ))}
        </div>
      )}

      {scp.Addendum && Object.keys(scp.Addendum).length > 0 && (
        <div>
          <h4>Addendum:</h4>
          {Object.entries(scp.Addendum).map(([key, value]) => (
            <div key={key}>
              <h5>Addendum: {key}</h5>
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}

    </Box>
  );
}

export default SCPFiles;
