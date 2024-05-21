import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns1: GridColDef[] = [
  { field: 'no', headerName: 'No'},
  { field: 'date', headerName: 'Date'},
  { field: 'totalQuantity', headerName: 'Total Quantity'},
  {
    field: 'totalWeight',
    headerName: 'Total Weight',
    type: 'number',
  },
  {
    field: 'salesQuantity',
    headerName: 'Sales Quantity',
    type: 'number',
  },
  {
    field: 'salesWeight',
    headerName: 'Sales Weight',
    type: 'number',
  },
  {
    field: 'balanceQuantity',
    headerName: 'Balance Quantity',
    type: 'number',
  },
  {
    field: 'balanceWeight',
    headerName: 'Balance Weight',
    type: 'number',
  },
];

const rows1 = [
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

const columns2: GridColDef[] = [
  { field: 'no', headerName: 'No'},
  { field: 'name', headerName: 'Name'},
  { field: 'date', headerName: 'Date'},
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
  },
  {
    field: 'weight',
    headerName: 'Weight',
    type: 'number',
  },
  {
    field: 'remarks',
    headerName: 'Remarks',
    type: 'number',
  },
];

const rows2 = [
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

export default function ViewStocks() {
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
            <Stack padding={2} spacing={2} direction="row" alignItems={'self-end'}>
              <Typography >
                Stock Name
              </Typography >
              <TextField id="outlined-basic" variant="standard" size="small"/> 
            </Stack>

            <Stack padding={2} spacing={2} direction="row" alignSelf="self-end">
              <Card sx={{
                minWidth: '50%',
                bgcolor: "gray",
                display: "flex",
                
              }}>
                <CardContent>
                  <Typography sx={{ alignSelf: "center" }}>
                    Available Total
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Quantity:
                  </Typography >
                  <Typography sx={{ alignSelf: "self-start" }}>
                    Weight in gm: 
                  </Typography >
                </CardContent>
              </Card>
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "center" }}>
                Stocks and Sales report:
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns1}
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

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "center" }}>
                Stock history:
              </Typography >
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows2}
        columns={columns2}
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
