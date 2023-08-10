import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function AddEntry() {
    const [entryData, setEntryData] = useState({
      title: '',
      description: '',
      // Add more fields as needed
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setEntryData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can handle the submission of the form data
      console.log(entryData); // Just an example, you can replace this with your actual submission logic
    };

    return (
        <div>
          <h1>Add Entry</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <TextField
                name="title"
                label="Title"
                variant="outlined"
                value={entryData.title}
                onChange={handleChange}
              />
                            <TextField
                name="object"
                label="object class"
                variant="outlined"
                value={entryData.title}
                onChange={handleChange}
              />
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={entryData.description}
                onChange={handleChange}
              />
              {/* Add more TextField components for additional fields */}
              <Button variant="contained" color="primary" type="submit">
                Add Entry
              </Button>
            </Box>
          </form>
        </div>
      );
    }

export default AddEntry;