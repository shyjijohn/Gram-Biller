import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function NoPage() {
  return (
    <Stack padding={2} spacing={2} direction="column">
              <Typography variant="h3" sx={{ alignSelf: "center" }}>
                404
              </Typography >
              <Typography variant="h5" sx={{ alignSelf: "center" }}>
                Page not found
              </Typography >
              <Typography sx={{ alignSelf: "center" }}>
                We can't seem to find the page you are looking for.
              </Typography >
            </Stack>
  )
}
