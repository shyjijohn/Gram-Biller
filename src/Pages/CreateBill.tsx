import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SaveIcon from '@mui/icons-material/Save';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { DataGrid, GridColDef, GridRowsProp, GridRowId, GridRowParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import axios from 'axios'


// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

interface DataRow {
  id: number;
  product: string;
  qty: number;
  gross_weight: number;
  stone_weight: number;
  stone_rate: number;
  n_wt: number;
  va_percent: number;
  mc_hc: number;
  amount: number;
}

const initialRows: GridRowsProp = [
  { id: 1, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00 },
  // { s_no: 2, product: 'Jane Smith', age: 25, city: 'San Francisco' },
  // { s_no: 3, product: 'Michael Johnson', age: 45, city: 'Chicago' },
  // { s_no: 4, product: 'Mary Brown', age: 35, city: 'Miami' },
];




export default function CreateBill() {

  //get only stock names from DB 
  //assign or store those name in a usestate variable 
  //create the columns collection after defining usestate in this react component.  


  const [rows, setRows] = useState<GridRowsProp>(initialRows);
  const [clickedRowId, setClickedRowId] = useState();
  const [stockNames, setStockNames] = useState<string[]>([]);
  const PORT = 3000;

  const getStockNames = () => {
    console.log("getStockNames")
    axios.get(`http://localhost:${PORT}/GetStocks`).then((response) => {
      console.log("response.data", response.data)
      //set the setStockNames useState
    })
  }

  useEffect(() => {
    getStockNames()
  }, [])



  const columns: GridColDef[] = [
    { field: 'id', headerName: 'S.No', width: 70 },
    {
      field: 'product', headerName: 'Product', width: 130, editable: true, type: 'singleSelect',
      valueOptions: stockNames,
    },
    { field: 'qty', headerName: 'QTY', width: 130, editable: true },
    { field: 'gross_weight', headerName: 'Gross Weight', width: 130, editable: true },
    { field: 'stone_weight', headerName: 'Stone Weight', width: 70, editable: true },
    { field: 'stone_rate', headerName: 'Stone Rate', width: 130, editable: true },
    { field: 'n_wt', headerName: 'N.WT', width: 130 },
    { field: 'va_percent', headerName: 'VA%', width: 130, editable: true },
    { field: 'mc_hc', headerName: 'MC/HC', width: 70, editable: true },
    { field: 'amount', headerName: 'Amount', width: 130 },
  ];


  const handleProcessRowUpdate = (newRow: any) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
    );
  }


  function handleAddRow() {
    console.log('new row added');

    const id = randomId();
    // const newRow = { id: idValue, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00 }

    // const copyRows  = [...rows]; 
    // copyRows.push(newRow);

    // console.log("CopyRows", copyRows)
    // setRows(copyRows)

    setRows((prevRows) => [
      ...prevRows,
      { id, product: '', qty: 0, gross_weight: 0.000, stone_weight: 0.000, stone_rate: 0.00, n_wt: 0.000, va_percent: 0.00, mc_hc: 0.00, amount: 0.00, isNew: true },
    ]);
  }


  function handleRowClick(params: GridRowParams) {
    console.log('Row clicked:', params.row.id);
    setClickedRowId(params.row.id)
  };


  function handleDeleteRow(btnEvent: React.MouseEvent<HTMLButtonElement>) {
    console.log('delete existing row', btnEvent);

    setRows((prevRows) => rows.filter((row) => row.id !== clickedRowId));
  };



  return (
    <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row">
      <Card sx={{
        minWidth: '50%',
        bgcolor: "white",
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
              <Stack paddingTop={2} spacing={0} direction="column">
                <Typography sx={{ alignSelf: "center" }}>
                  Jewellers
                </Typography >
                <Typography sx={{ alignSelf: "center" }}>
                  Kulasekharam
                </Typography >
                <Typography sx={{ alignSelf: "center" }}>
                  8438607589
                </Typography >
              </Stack>

              <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between">
                <Stack spacing={2} direction="column">
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Name:
                    </Typography >
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Phone:
                    </Typography >
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Address:
                    </Typography >
                    <Stack spacing={2} direction="column">
                      <TextField id="outlined-basic" variant="standard" size="small" />
                      <TextField id="outlined-basic" variant="standard" size="small" />
                    </Stack>
                  </Stack>
                </Stack>
                <Stack spacing={2} direction="column">
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Invoice No:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      685273
                    </Typography >
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Date:
                    </Typography >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker label="DD/MM/YYYY" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Gold Rate:
                    </Typography >
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Silver Rate:
                    </Typography >
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                </Stack>
              </Stack>


              {/* <Stack paddingTop={2} spacing={2} direction="row">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">QTY</TableCell>
                        <TableCell align="right">Gross Weight</TableCell>
                        <TableCell align="right">Stone Weight</TableCell>
                        <TableCell align="right">Stone Rate</TableCell>
                        <TableCell align="right">N.WT</TableCell>
                        <TableCell align="right">VA%</TableCell>
                        <TableCell align="right">MC/HC</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack> */}

              <Container style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  // disableRowSelectionOnClick
                  autoHeight
                  hideFooterPagination
                  processRowUpdate={handleProcessRowUpdate}
                  onRowClick={handleRowClick}
                />
              </Container>


              <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between">
                <Typography sx={{ alignSelf: "left" }}>
                  In Words:
                </Typography >
                <Stack paddingTop={2} spacing={2} direction="column">
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "right" }}>
                      Taxable Amount:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      0.00
                    </Typography >
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      Discount:
                    </Typography >
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      NET AMOUNT:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      0.00
                    </Typography >
                  </Stack>
                </Stack>
              </Stack>

              {/* <Stack paddingTop={2} spacing={2} direction="row">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Particulars</TableCell>
                        <TableCell align="right">WT</TableCell>
                        <TableCell align="right">Wastage</TableCell>
                        <TableCell align="right">Total WT</TableCell>
                        <TableCell align="right">Rate</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack> */}


              <Stack paddingTop={2} spacing={2} direction="row" justifyContent="space-between">
                <Stack spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "left" }}>
                    Old Gold Total Weight:
                  </Typography >
                  <Typography sx={{ alignSelf: "left" }}>
                    0.000
                  </Typography >
                </Stack>
                <Stack spacing={2} direction="column">
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "right" }}>
                      Old Reduced:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      0.00
                    </Typography >
                  </Stack>
                  <Stack spacing={2} direction="row">
                    <Typography sx={{ alignSelf: "center" }}>
                      TOTAL:
                    </Typography >
                    <Typography sx={{ alignSelf: "center" }}>
                      0.00
                    </Typography >
                  </Stack>
                </Stack>
              </Stack>

            </Stack>
          </Box>
        </CardContent>
      </Card>
      <Stack padding={2} spacing={2} direction="column">
        <SaveIcon sx={{ height: 40, width: 40 }} />
        <Button variant="text" onClick={handleAddRow}><LibraryAddIcon sx={{ height: 40, width: 40 }} /></Button>
        <Button variant="text" onClick={handleDeleteRow}><DeleteIcon sx={{ height: 40, width: 40 }} /></Button>
        <LibraryAddIcon sx={{ height: 40, width: 40 }} />
        <DeleteIcon sx={{ height: 40, width: 40 }} />
      </Stack>
    </Stack>
  )
}

