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
    <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row" sx={{ display: "flex", alignSelf: "end" }} >
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
            sx={{ border: '2px solid gray', maxWidth: '100%' }}
          >
            <Stack direction="row" spacing={2} sx={{ maxWidth: '100%' }}>
              <Stack direction="column" spacing={2}>
                <Typography sx={{ alignSelf: "self-start", lineHeight: 4 }}>
                  Date
                </Typography >
                <Typography sx={{ alignSelf: "self-start", lineHeight: 1 }}>
                  Cash Payment
                </Typography >
                <Typography sx={{ alignSelf: "self-start", lineHeight: 2 }}>
                  Online Payment
                </Typography >
                <Typography sx={{ alignSelf: "self-start", lineHeight: 2 }}>
                  Total Amount Paid
                </Typography >
              </Stack>

              <Stack direction="column" spacing={0} justifyContent="space-between" >
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="MM/DD/YYYY" />
                  </DemoContainer>
                </LocalizationProvider>
                <TextField id="outlined-basic" variant="outlined" size="small" />
                <TextField id="outlined-basic" variant="outlined" size="small" />
                <TextField id="outlined-basic" variant="outlined" size="small" />
              </Stack>



              <Stack direction="column" >
                <Button>
                  <PageviewOutlinedIcon sx={{
                    stroke: "#ffffff",
                    strokeWidth: 1,
                    alignSelf: "center",
                    height: 40,
                    width: 40
                  }} />
                </Button>
              </Stack>
            </Stack>

            {/* <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              
            </Stack>

            <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              
            </Stack>

            <Stack padding={2} spacing = {2} direction="row" justifyContent="space-between">
              
            </Stack> */}
            {/* </Stack> */}

          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}
