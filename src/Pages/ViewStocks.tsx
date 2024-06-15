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
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'
import { useEffect, useState } from 'react';



interface stocksHistory {
  id: number;
  name: string;
  date: number;
  quantity: number;
  weight: number;
  remarks: number;
}

// const stocksHistoryInitialRows: stocksHistory[] = [
//   { id: 1, name: '', date: 0, quantity: 0.000, weight: 0.000, remarks: 0.00 },
// ];


export default function ViewStocks() {

  const [stockNames, setStockNames] = useState<string[]>([]);
  const [optionStock, setOptionStock] = useState<string | null>('');

  const [stocksHistory, setStocksHistory] = useState<stocksHistory[]>([]);


  const PORT = 3000;



  const stocksReportColumn: GridColDef[] = [
    { field: 'no', headerName: 'No', width: 10 },
    { field: 'date', headerName: 'Date', width: 10 },
    { field: 'totalQuantity', headerName: 'Total Quantity', width: 100 },
    { field: 'totalWeight', headerName: 'Total Weight', type: 'number', width: 100 },
    { field: 'salesQuantity', headerName: 'Sales Quantity', type: 'number', width: 110 },
    { field: 'salesWeight', headerName: 'Sales Weight', type: 'number', width: 100 },
    { field: 'balanceQuantity', headerName: 'Balance Quantity', type: 'number', width: 120 },
    { field: 'balanceWeight', headerName: 'Balance Weight', type: 'number', width: 120 },
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

  const stocksHistoryColumn: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 20 },
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'date', headerName: 'Date', width: 70 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 70 },
    { field: 'weight', headerName: 'Weight', type: 'number', width: 80 },
    { field: 'remarks', headerName: 'Remarks', type: 'number', width: 100 },
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


  var arr: string[] = []
  const getStockNames = () => {
    // console.log("getStockNames")
    axios.get(`http://localhost:${PORT}/GetStocks`).then((response) => {
      // console.log("response.data", response.data);
      //set the setStockNames useState
      (response.data).forEach((data: any) => {
        // console.log("data.Name", data.Name)

        arr.push(data.Name)
      })
      setStockNames(arr)
      // console.log("arr", arr)
    });
  }

  var arr: string[] = []
  const getStockHistoryFn = (stockName: string | null) => {
    // console.log("getStockNames")
    if (stockName == null) {
      return
    }
    const qstr = `http://localhost:${PORT}/GetStocksHistory?Name='${stockName}'`
    console.log(qstr)
    axios.get(qstr).then((response) => {
      console.log("response.data.....", response.data);

      //initialize an stockhistory array
      var stockHistoryObjColl:stocksHistory[] = [];

      (response.data).forEach((data:any) => {
        console.log("data", data)
        console.log("name", data.Stocks_id)

        //create a stock history object here
        //assign the values from response.data to the newly created stock history object
        //push the stock history object to the collection 

        const stockHistoryObj : stocksHistory = 
        {
          id : data.Stocks_id,
          name : data.Name,
          date : data.Date,
          quantity : data.Quantity,
          weight : data.Weight,
          remarks : data.Remarks
        }
        stockHistoryObjColl.push(stockHistoryObj)
      })
      setStocksHistory(stockHistoryObjColl)
    });
    
  }

  useEffect(() => {
    getStockNames()
  }, [])


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
            <Stack sx={{ maxWidth: '100%' }}>
              <Stack spacing={2} direction="row" justifyContent="center">
                <Typography >
                  Stock Name
                </Typography >
                <Autocomplete
                  disablePortal
                  onChange={(event: any, newValue: string | null) => {
                    setOptionStock(newValue);
                    console.log("newValue: " + newValue);
                    getStockHistoryFn(newValue);
                  }}
                  id="combo-box-demo"
                  options={stockNames}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} variant="standard" />
                  )}
                />
              </Stack>

              <Stack padding={2} spacing={2} direction="row" justifyContent="center">
                <Card sx={{
                  minWidth: '30%',
                  border: "gray",
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

              <Stack paddingTop={2} spacing={2} direction="row">
                <Typography sx={{ alignSelf: "center" }}>
                  Stocks and Sales report:
                </Typography >
              </Stack>

              <Stack paddingTop={2} spacing={2} direction="row">
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows1}
                    columns={stocksReportColumn}
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

              <Stack paddingTop={2} spacing={2} direction="row">
                <Typography sx={{ alignSelf: "center" }}>
                  Stock history:
                </Typography >
              </Stack>

              <Stack paddingTop={2} spacing={2} direction="row">
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={stocksHistory}
                    columns={stocksHistoryColumn}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
                <DeleteIcon sx={{ height: 30, width: 30 }} />
              </Stack>

            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  )
}
