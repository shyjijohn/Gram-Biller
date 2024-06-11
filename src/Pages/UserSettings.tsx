import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function UserSettings() {
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
                Line 1
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Line 2
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Line 3
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Title
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "flex-start" }}>
                Backup type
              </Typography >
              <Typography sx={{ alignSelf: "flex-end" }}>
                Local only
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="flex-end">
              <TextField
                disabled
                id="outlined-disabled"
                defaultValue="Update"
                size="small"
              />
            </Stack>
          </Stack>

        </Box>
      </CardContent>
    </Card>
    </Stack>
  )
}
