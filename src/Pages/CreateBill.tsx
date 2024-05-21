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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SaveIcon from '@mui/icons-material/Save';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function CreateBill() {
  return (
    <Stack padding={2} spacing={2} direction="row">
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
            <Stack padding={2} spacing={2} direction="column">
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

            <Stack padding={2} spacing={2} direction="row">
              <Stack padding={2} spacing={2} direction="column">
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Name:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Phone:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Address:
                  </Typography >
                  <Stack padding={2} spacing={2} direction="column">
                    <TextField id="outlined-basic" variant="standard" size="small" />
                    <TextField id="outlined-basic" variant="standard" size="small" />
                  </Stack>
                </Stack>
              </Stack>
              <Stack padding={2} spacing={2} direction="column">
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Invoice No:
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    685273
                  </Typography >
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Date:
                  </Typography >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="DD/MM/YYYY" />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Gold Rate:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Silver Rate:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
              </Stack>
            </Stack>


            <Stack padding={2} spacing={2} direction="row">
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
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                In Words:
              </Typography >
              <Stack padding={2} spacing={2} direction="column">
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "right" }}>
                    Taxable Amount:
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    0.00
                  </Typography >
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    Discount:
                  </Typography >
                  <TextField id="outlined-basic" variant="standard" size="small" />
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "center" }}>
                    NET AMOUNT:
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    0.00
                  </Typography >
                </Stack>
              </Stack>
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
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
            </Stack>


            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Stack padding={2} spacing={2} direction="row">
                <Typography sx={{ alignSelf: "left" }}>
                  Old Gold Total Weight:
                </Typography >
                <Typography sx={{ alignSelf: "left" }}>
                  0.000
                </Typography >
              </Stack>
              <Stack padding={2} spacing={2} direction="column">
                <Stack padding={2} spacing={2} direction="row">
                  <Typography sx={{ alignSelf: "right" }}>
                    Old Reduced:
                  </Typography >
                  <Typography sx={{ alignSelf: "center" }}>
                    0.00
                  </Typography >
                </Stack>
                <Stack padding={2} spacing={2} direction="row">
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
    <SaveIcon sx={{ height: 40, width: 40 }}/>
    <LibraryAddIcon sx={{ height: 40, width: 40 }}/>
    <DeleteIcon sx={{ height: 40, width: 40 }}/>
    <LibraryAddIcon sx={{ height: 40, width: 40 }}/>
    <DeleteIcon sx={{ height: 40, width: 40 }}/>
    </Stack>
    </Stack>
  )
}
