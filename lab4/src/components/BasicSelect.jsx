import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function BasicSelect({city, setCity}) {
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={"Monterrey"}>Monterrey</MenuItem>
          <MenuItem value={"New York"}>New York</MenuItem>
          <MenuItem value={"Chicago"}>Chicago</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
