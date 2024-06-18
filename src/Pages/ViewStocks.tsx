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
  date: string;
  quantity: number;
  weight: number;
  remarks: number;
}

interface stocksReport {
  id: number;
  date: string;
  totalQuantity: number;
  totalWeight: number;
  salesQuantity: number;
  salesWeight: number;
  balanceQuantity: number;
  balanceWeight: number;
}

// const stocksHistoryInitialRows: stocksHistory[] = [
//   { id: 1, name: '', date: 0, quantity: 0.000, weight: 0.000, remarks: 0.00 },
// ];


export default function ViewStocks() {

  const [stockNames, setStockNames] = useState<string[]>([]);
  const [optionStock, setOptionStock] = useState<string | null>('');

  const [stocksHistory, setStocksHistory] = useState<stocksHistory[]>([]);
  const [stocksReport, setStocksReport] = useState<stocksReport[]>([]);


  const PORT = 3000;



  const stocksReportColumn: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 10 },
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
      var stockHistoryObjColl: stocksHistory[] = [];

      (response.data).forEach((data: any) => {
        console.log("data", data)
        console.log("name", data.Stocks_id)


        const Date1 = data.Date;
        console.log("date...2", data.Date, Date1)
        var sqlDateTime = new Date(Date1);
        console.log("sqlDateTime...2", data.Date, Date1, sqlDateTime)
        const year = sqlDateTime.getFullYear();
        const month = String(sqlDateTime.getMonth() + 1).padStart(2, '0');
        const day = String(sqlDateTime.getDate()).padStart(2, '0');
        console.log(`hhi${year}-${month}-${day}`);


        //create a stock history object here
        //assign the values from response.data to the newly created stock history object
        //push the stock history object to the collection 

        const stockHistoryObj: stocksHistory =
        {
          id: data.Stocks_id,
          name: data.Name,
          date: `${year}-${month}-${day}`,
          quantity: data.Quantity,
          weight: data.Weight,
          remarks: data.Remarks
        }
        stockHistoryObjColl.push(stockHistoryObj)
      })
      setStocksHistory(stockHistoryObjColl)
    });

  }


  const getStockReportFn = (stockName: string | null) => {
    // console.log("getStockNames")
    if (stockName == null) {
      return
    }
    const qstr = `http://localhost:${PORT}/GetStockReport?Name='${stockName}'`
    console.log(qstr)
    axios.get(qstr).then((response) => {
      console.log("response.data.....", response.data);

      //initialize an stockhistory array
      var stockReportObjColl: stocksReport[] = [];

      (response.data).forEach((data: any) => {
        console.log("data", data)
        console.log("name", data.Stocks_id)

        if (data.Sales_Date == null) {
          var stockDateVar = data.Stock_Date
          var Date1 = data.Stock_Date;
          console.log("date...2", Date1)
        }
        else if (data.Stock_Date == null) {
          var salesDateVar = data.Sales_Date
          var Date1 = data.Sales_Date;
          console.log("date...2", Date1)
        }
        var sqlDateTime = new Date(Date1);
        console.log("sqlDateTime...2", data.Date, Date1, sqlDateTime)
        const year = sqlDateTime.getFullYear();
        const month = String(sqlDateTime.getMonth() + 1).padStart(2, '0');
        const day = String(sqlDateTime.getDate()).padStart(2, '0');
        console.log(`hhi${year}-${month}-${day}`);

        var dateArr: string[] = []

        var Stock_Quantity, Stock_QuantityArr:number[] = []
        var Sales_Quantity, Sales_QuantityArr:number[] = []
        var Stock_Weight, Stock_WeightArr:number[] = []
        var Sales_Weight, Sales_WeightArr:number[] = []

        if (dateArr.includes(`${year}-${month}-${day}`) && (data.Stock_QTY == '' || null || undefined)) {
          Sales_QuantityArr.pop()
          Sales_WeightArr.pop()
          Sales_Quantity += data.Sales_QTY
          console.log("Sales_Quantity add", Sales_Quantity)
          Sales_Weight += data.Sales_WT
        }

        if (dateArr.includes(`${year}-${month}-${day}`) && data.Sales_QTY == null) {
          Stock_QuantityArr.pop()
          Stock_WeightArr.pop()
          Stock_Quantity += data.Stock_QTY
          Stock_Weight += data.Stock_WT
        }

        if (!dateArr.includes(`${year}-${month}-${day}`)) {
          Sales_Quantity = data.Sales_QTY
          Sales_Weight = data.Sales_WT
          Stock_Quantity = data.Stock_QTY
          Stock_Weight = data.Stock_WT
        }
        Stock_QuantityArr.push(Stock_Quantity)
        Sales_QuantityArr.push(Sales_Quantity)
        Stock_WeightArr.push(Stock_Weight)
        Sales_WeightArr.push(Sales_Weight)
        console.log("Stock_QuantityArr",dateArr, Stock_QuantityArr, Sales_QuantityArr, Stock_WeightArr, Sales_WeightArr)

        dateArr.push(`${year}-${month}-${day}`)
        // Stock_Quantity = ''
        // Sales_Quantity = ''
        // Stock_Weight = ''
        // Sales_Weight = ''
      })

      //create a stock history object here
      //assign the values from response.data to the newly created stock history object
      //push the stock history object to the collection 

      // const stockReportObj: stocksReport =
      // {
      //   id: data.Stocks_id,
      //   date: `${year}-${month}-${day}`,
      //   totalQuantity: data.Total_Quantity,
      //   totalWeight: data.Total_Weight,
      //   salesQuantity: 1,
      //   salesWeight: 1,
      //   balanceQuantity: 1,
      //   balanceWeight: 1
      // }
      // stockReportObjColl.push(stockReportObj)

      // setStocksReport(stockReportObjColl)
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
                    getStockReportFn(newValue);
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
