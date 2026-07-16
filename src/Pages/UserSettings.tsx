import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function UserSettings() {
  const [storeName, setStoreName] = useState<string>(localStorage.getItem('userName') || '');

  const handleUpdateName = () => {
    localStorage.setItem('userName', storeName);
    alert('Store name updated successfully!');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };
  return (
    <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row"  sx={{ display: "flex", alignSelf: "end" }} >
      <Card sx={{
        maxWidth: '60%',
        bgcolor: "white",
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <CardContent sx={{ maxWidth: '100%' }}>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid gray' , maxWidth: '100%' }}
          >
            <Stack sx={{ maxWidth: '100%' }}>
            <Stack  direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                App version:
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="flex-end">
            <Button variant="outlined">Log out</Button>
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Store Name
              </Typography >
              <TextField 
                id="store-name" 
                variant="outlined" 
                size="small" 
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "flex-start" }}>
                Backup type
              </Typography >
              <Typography sx={{ alignSelf: "flex-end" }}>
                Local only (Browser localStorage)
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Button variant="contained" color="error" onClick={handleClearData}>
                Clear Entire Data
              </Button>
              <Button variant="contained" color="primary" onClick={handleUpdateName}>
                Update Name
              </Button>
            </Stack>
          </Stack>

        </Box>
      </CardContent>
    </Card>
    </Stack>
  )
}
