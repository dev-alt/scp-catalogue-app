import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material'; // Import Material-UI components
import Data from '../assets/scpData.json';

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 64px - 64px)',
  margin: '15px',
  padding: '15px',
  lineHeight: 1,
  textAlign: 'left',
};

const SCPFiles = () => {
  const { scpId } = useParams();
  const scpList = Data.sort((a, b) => {
    // Sort by SCP number (assuming the number is a string)
    return a.number.localeCompare(b.number);
  });
  const scp = scpList.find(item => item.number === scpId);

  if (!scp) {
    return <div>SCP not found</div>;
  }

  return (
    <Box sx={bodyStyles}>
      <Typography variant="h3">{scp.number}</Typography>
      <Typography variant="h4">Object Class: {scp.objectClass}</Typography>

      {scp.image && scp.image.length > 0 && (
        <img src={scp.image} alt={scp.number} />
      )}

      <Typography variant="h4">Special Containment Procedures:</Typography>
      <Box>
        {scp.specialContainmentProcedures.map((procedure, index) => (
          <Typography
            key={index}
            sx={{ margin: '8px 0', fontSize: '16px' }}
          >
            {procedure}
          </Typography>
        ))}
      </Box>

      <Box>
        {scp.description.map((desc, index) => (
          <Typography key={index} mt={1} fontSize={16}>
            {desc}
          </Typography>
        ))}
      </Box>

      {scp.reference && scp.reference.length > 0 && (
        <Box>
          <Typography variant="h4">Reference:</Typography>
          <Box
            sx={{
              backgroundColor: '#f8f8f8',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            {scp.reference.map((ref, index) => (
              <Typography key={index} mt={1} fontSize={16}>
                {ref}
              </Typography>
            ))}
          </Box>
        </Box>
      )}

      {scp.Addendum && Object.keys(scp.Addendum).length > 0 && (
        <Box>
          <Typography variant="h4">Addendum:</Typography>
          {Object.entries(scp.Addendum).map(([key, value]) => (
            <Box
              key={key}>
              <Typography variant="h5">Addendum: {key}</Typography>
              <Typography mt={1} fontSize={16}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {scp.appendix && scp.appendix.length > 0 && (
        <Box>
          <Typography variant="h4">Appendices:</Typography>
          {scp.appendix.map((appendix, index) => (
            <Box key={index}              >
              <Typography variant="h5">{appendix.title}</Typography>
              {appendix.description && (
                <Typography mt={1} fontSize={16}>
                  {appendix.description}
                </Typography>
              )}
              {appendix.item && (
                <Box>
                  <Typography>Item: {appendix.item}</Typography>
                  <Typography>Date of Discovery: {appendix.dateOfDiscovery}</Typography>
                  <Typography>Origin of Object: {appendix.originOfObject}</Typography>
                  <Typography>Description: {appendix.description}</Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SCPFiles;
