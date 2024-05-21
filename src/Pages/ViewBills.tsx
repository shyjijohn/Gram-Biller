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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'no', headerName: 'No'},
  { field: 'name', headerName: 'Name'},
  { field: 'phoneNo', headerName: 'Phone No'},
  {
    field: 'invoiceNo',
    headerName: 'Invoice No',
    type: 'number',
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'number',
  },
  {
    field: 'goldWeight',
    headerName: 'Gold Weight',
    type: 'number',
  },
  {
    field: 'silverWeight',
    headerName: 'Silver Weight',
    type: 'number',
  },
  {
    field: 'oldItemWeight',
    headerName: 'Old Item Weight',
    type: 'number',
  },
  {
    field: 'discount',
    headerName: 'Discount',
    type: 'number',
  },
  {
    field: 'billAmount',
    headerName: 'Bill Amount',
    type: 'number',
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



export default function ViewBills() {
  return (
    <Stack  padding={2} spacing={2} direction="column">
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
            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Date From:
              </Typography >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="DD/MM/YYYY" />
                </DemoContainer>
              </LocalizationProvider>
              <Typography sx={{ alignSelf: "left" }}>
                Date To:
              </Typography >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="DD/MM/YYYY" />
                </DemoContainer>
              </LocalizationProvider>
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Name:
              </Typography >
              <TextField id="outlined-basic" variant="standard" size="small" />
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Invoice No:
              </Typography >
              <TextField id="outlined-basic" variant="standard" size="small" />
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Phone No:
              </Typography >
              <TextField id="outlined-basic" variant="standard" size="small" />
              <PageviewOutlinedIcon sx={{
                alignSelf: "center",
                height: 40,
                width: 40
              }} />
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
    </Stack>
            </Stack>
        </Box>
      </CardContent>
    </Card>
    <Stack padding={2} spacing={2} direction="column">
    <VisibilityIcon color="disabled" sx={{ height: 40, width: 40 }}/>
    <DeleteIcon color="disabled" sx={{ height: 40, width: 40 }}/>
    </Stack>
    </Stack>
  )
}
