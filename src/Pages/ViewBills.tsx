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
  { field: 'no', headerName: 'No', width: 10 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'phoneNo', headerName: 'Phone No', width: 100 },
  {
    field: 'invoiceNo',
    headerName: 'Invoice No',
    type: 'number',
    width: 80
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 60
  },
  {
    field: 'address',
    headerName: 'Address',
    type: 'number',
    width: 90
  },
  {
    field: 'goldWeight',
    headerName: 'Gold Weight',
    type: 'number',
    width: 120
  },
  {
    field: 'silverWeight',
    headerName: 'Silver Weight',
    type: 'number',
    width: 120
  },
  {
    field: 'oldItemWeight',
    headerName: 'Old Item Weight',
    type: 'number',
    width: 140
  },
  {
    field: 'discount',
    headerName: 'Discount',
    type: 'number',
    width: 90
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
    <Stack padding={2} spacing={2} direction="row" >
      <Card sx={{
        minWidth: '80%',
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
            sx={{ border: '2px solid grey' }}
          >
            <Stack sx={{ maxWidth: '100%' }}>
              <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '80%' }}>
                <Stack>
                  <Typography sx={{ alignSelf: "left" }}>
                    Date From:
                  </Typography >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="DD/MM/YYYY" />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>
                <Stack>
                  <Typography sx={{ alignSelf: "left" }}>
                    Date To:
                  </Typography >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="DD/MM/YYYY" />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>
                <Stack>
                  <PageviewOutlinedIcon sx={{
                    alignSelf: "center",
                    height: 40,
                    width: 40
                  }} />
                </Stack>
              </Stack>

              <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '80%' }}>
                <Stack direction="row" sx={{ maxWidth: '80%' }}>
                  <Typography sx={{ alignSelf: "left" }}>
                    Name:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack>
                  <PageviewOutlinedIcon sx={{
                    alignSelf: "center",
                    height: 40,
                    width: 40
                  }} />
                </Stack>
              </Stack>

              <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '80%' }}>
                <Stack direction="row">
                  <Typography sx={{ alignSelf: "left" }}>
                    Invoice No:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack>
                  <PageviewOutlinedIcon sx={{
                    alignSelf: "center",
                    height: 40,
                    width: 40
                  }} />
                </Stack>
              </Stack>

              <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '80%' }}>
                <Stack direction="row">
                  <Typography sx={{ alignSelf: "left" }}>
                    Phone No:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack>
                  <PageviewOutlinedIcon sx={{
                    alignSelf: "center",
                    height: 40,
                    width: 40
                  }} />
                </Stack>
              </Stack>

              <Stack paddingTop={2} spacing={1} direction="row">
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
        <VisibilityIcon color="disabled" sx={{ height: 40, width: 40 }} />
        <DeleteIcon color="disabled" sx={{ height: 40, width: 40 }} />
      </Stack>
    </Stack>
  )
}
