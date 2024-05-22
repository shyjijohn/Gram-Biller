import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';



export default function ViewSales() {
  return (
    <Card sx={{
      minWidth: '50%',
      bgcolor: "red",
      alignSelf: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <CardContent>
        <Box

          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <Stack>
          <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between" >
              <Typography sx={{ alignSelf: "center" }}>
                Date
              </Typography >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="MM/DD/YYYY" />
                </DemoContainer>
              </LocalizationProvider>

              <PageviewOutlinedIcon sx={{ alignSelf: "center",
                                          height: 40,
                                          width: 40
               }}/>
            </Stack>

            <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Cash Payment
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Online Payment
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Total Amount Paid
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>
          </Stack>

        </Box>
      </CardContent>
    </Card>
  )
}
