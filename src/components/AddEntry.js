import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

function AddEntry() {
    const [entryData, setEntryData] = useState({
        title: '',
        object: '',
        procedures: '',
        description: '',
        reference: '',
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
        console.log(entryData);
    };

    return (
        <div>
            <Box sx={{ mt: 0, textAlign: 'center', color: 'error.main' }}>
                <h1>Add Entry</h1>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, margin: 5 }}>
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
                        value={entryData.object}
                        onChange={handleChange}
                    />
                    <TextField
                        name="procedures"
                        label="procedures"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={entryData.procedures}
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
                    <TextField
                        name="reference"
                        label="reference"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={entryData.reference}
                        onChange={handleChange}
                    />

                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 4, mb: 5, textAlign: 'center', }}>
                        Add Entry
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default AddEntry;