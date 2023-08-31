import React from 'react';
import { Box, Typography, Grid } from '@mui/material'; // Import Material-UI components
import { useParams } from 'react-router-dom';

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '15px',
  padding: '15px',
  textAlign: 'left',
};

function SCPFiles({ scpEntries }) {
  const { scpId } = useParams();

  const scp = scpEntries.find(item => item.number === scpId);


  if (!scp) {
    return <Box>SCP not found</Box>;
  }

  return (
    <Grid container spacing={2} style={{ width: '80%', margin: '0 auto' }}>
      <Grid item xs={12}>
        <Box sx={bodyStyles}>
          <Typography variant="h3">{scp.number}</Typography>
          <Typography variant="h4">Object Class: {scp.objectClass}</Typography>

          {scp.image && scp.image.length > 0 && (
            <img src={scp.image} alt={scp.number} />
          )}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Typography variant="h4">Special Containment Procedures:</Typography>
          {scp.specialContainmentProcedures.map((procedure, index) => (
            <Typography
              key={index}
              sx={{ margin: '8px 0', fontSize: '16px' }}
            >
              {procedure}
            </Typography>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Typography variant="h4">Description:</Typography>

          {scp.description.map((desc, index) => (
            <Typography key={index} mt={1} fontSize={16}>
              {desc}
            </Typography>
          ))}
        </Box>
      </Grid>

      {scp.reference && scp.reference.length > 0 && (
        <Grid item xs={12}>
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
        </Grid>
      )}

      {scp.Addendum && Object.keys(scp.Addendum).length > 0 && (
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4">Addendum:</Typography>
            {Object.entries(scp.Addendum).map(([key, value]) => (
              <Box
                key={key}
              >
                <Typography variant="h6">Addendum: {key}</Typography>
                <Typography mt={1} mb={1} fontSize={16}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      )}

      {scp.appendix && scp.appendix.length > 0 && (
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4">Appendices:</Typography>
            {scp.appendix.map((appendix, index) => (
              <Box key={index}>
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
        </Grid>
      )}
    </Grid>
  );
}

export default SCPFiles;
