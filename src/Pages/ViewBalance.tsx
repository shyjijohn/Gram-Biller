import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'no', headerName: 'No', width: 10},
  { field: 'date', headerName: 'Date', width: 30},
  { field: 'billAmount', headerName: 'Bill Amount', width: 90},
  {
    field: 'paid',
    headerName: 'Paid',
    type: 'number',
    width: 60
  },
  {
    field: 'paymentType',
    headerName: 'Payment Type',
    type: 'number',
    width: 120
  },
  {
    field: 'modeOfPayment',
    headerName: 'Mode Of Payment',
    type: 'number',
    width: 140
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function ViewBalance() {
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
            <Stack padding={2} spacing={2} direction="row" >
              <Typography sx={{ alignSelf: "center" }}>
                Phone No
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "center", paddingRight:4 }}>
                Name
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="center">
              <Card sx={{
                minWidth: '50%',
                bgcolor: "gray",
                display: "flex",
                
              }}>
                <CardContent>
                  <Typography sx={{ alignSelf: "center" }}>
                    Customer Details
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Name:
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Phone No: 
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Total Transaction:
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Paid:
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Balance to pay: 
                  </Typography >
                  <Button disabled>Record Payment</Button>
                </CardContent>
              </Card>
            </Stack>

            

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "center" }}>
                Payment history:
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    <DeleteIcon sx={{ height: 50, width: 50 }}/>
            </Stack>           
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
