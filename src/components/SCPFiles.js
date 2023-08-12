import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'; // Import the Box component
import Data from '../assets/scpData.json';

const bodyStyles = {
  display: 'flex', // Use flexbox to center content
  flexDirection: 'column',
  justifyContent: 'center', // Center vertically
  alignItems: 'center', // Center horizontally
  minHeight: 'calc(100vh - 64px - 64px)',
  backgroundColor: '#f0f0f0',
  margin: '15px',
  padding: '15px',
  lineHeight: 1,
  textAlign: 'left',
};


function SCPFiles() {
  const { scpId } = useParams();
  const scp = Data.find(item => item.number === scpId);

  if (!scp) {
    return <div>SCP not found</div>;
  }

  return (
    <Box sx={bodyStyles}>
      <h3>{scp.number}</h3>
      <h4>Object Class: {scp.objectClass}</h4>

      {scp.image && scp.image.length > 0 && (
        <img src={scp.image} alt={scp.number}
        />
      )}

      <h4>Special Containment Procedures:</h4>
      <div style={{ backgroundColor: '#f8f8f8', padding: '10px', borderRadius: '5px' }}>
        {scp.specialContainmentProcedures.map((procedure, index) => (
          <p key={index} style={{ margin: '8px 0', fontSize: '16px' }}>{procedure}</p>
        ))}
      </div>

      <div style={{ backgroundColor: '#f8f8f8', padding: '10px', borderRadius: '5px' }}>
        {scp.description.map((desc, index) => (
          <Box key={index} mt={1} fontSize={16}>
            {desc}
          </Box>
        ))}
      </div>


      {scp.reference && scp.reference.length > 0 && (
        <div>
          <h4>Reference:</h4>
          <div style={{ backgroundColor: '#f8f8f8', padding: '10px', borderRadius: '5px' }}>
            {scp.reference.map((ref, index) => (
              <Box key={index} mt={1} fontSize={16}>
                {ref}
              </Box>
            ))}
          </div>
        </div>
      )}

      {scp.Addendum && Object.keys(scp.Addendum).length > 0 && (
        <div>
          <h4>Addendum:</h4>
          {Object.entries(scp.Addendum).map(([key, value]) => (
            <div key={key} style={{ backgroundColor: '#f8f8f8', padding: '10px', borderRadius: '5px' }}>
              <h5>Addendum: {key}</h5>
              <Box mt={1} fontSize={16}>
                {value}
              </Box>
            </div>
          ))}
        </div>
      )}




    </Box>
  );
}

export default SCPFiles;
