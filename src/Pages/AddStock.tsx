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
import { useState } from 'react';
import axios from 'axios'


export default function AddStock() {

  const [ stockName, setStockName ] = useState<string>('')
  const [ stockType, setStockType ] = useState<string>('')
  const [ stockDate, setStockDate ] = useState(null)
  const [ stockQuantity, setStockQuantity ] = useState<number>()
  const [ stockWeight, setStockWeight ] = useState<number>()
  const [ stockRemarks, setStockRemarks ] = useState<string>('')


  const PORT = 3000;


  function stockNameBtn(e: React.ChangeEvent<HTMLInputElement>)
  {
    // const valueAsString = String(e.target.value);
    setStockName(e.target.value)
    console.log("stockName", e.target.value)
  }

  function stockTypeBtn(e: React.ChangeEvent<HTMLInputElement>)
  {
    setStockType(e.target.value)
    console.log("stockType", e.target.value)
  }

  function stockDateBtn(newValue: any)
  {
    setStockDate(newValue)
    console.log("stockDate", newValue)
  }

  function stockQuantityBtn(e: React.ChangeEvent<HTMLInputElement>)
  {
    const value = e.target.value;
    const numberValue = parseInt(value, 10)
    setStockQuantity(numberValue);
    console.log("stockQuantity", e.target.value, parseInt(value, 10))
  }

  function stockWeightBtn(e: React.ChangeEvent<HTMLInputElement>)
  {
    const value = e.target.value;
    const numberValue = parseFloat(value)
    setStockWeight(numberValue)
    console.log("stockWeight", e.target.value, parseFloat(value))
  }

  function stockRemarksBtn(e: React.ChangeEvent<HTMLInputElement>)
  {
    setStockRemarks(e.target.value)
    console.log("stockRemarks..", e.target.value)
  }

  function addStocksBtn()
  {
    console.log("inside addstocksbtn.....")     
    console.log("stockRemarks", stockRemarks)

    axios.post(`http://localhost:${PORT}/AddStocks`, {
      Name: stockName,
      Stock_type: stockType, 
      Date: stockDate, 
      Quantity: stockQuantity,
      Weight: stockWeight,
      Remarks: stockRemarks
  })
  .then((response) => {
    console.log('Data posted:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  return (
    <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row"  sx={{ display: "flex", alignSelf: "end" }} >
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
          justifyContent="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <Stack sx={{ maxWidth: '100%' }}>
            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                Name
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" value={stockName} onChange={stockNameBtn} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                Stock type
              </Typography >
              <TextField id="outlined-basic" variant="standard" size="small" value={stockType} onChange={stockTypeBtn} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "center" }}>
                Date
              </Typography >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="DD/MM/YYYY" value={stockDate} onChange={stockDateBtn} />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                Quantity
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" value={stockQuantity !== undefined ? stockQuantity : ''} onChange={stockQuantityBtn} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                Weight(gm)
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" value={stockWeight !== undefined ? stockWeight : ''} onChange={stockWeightBtn} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between">
              <Typography sx={{ alignSelf: "left" }}>
                Remarks
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" value={stockRemarks} onChange={stockRemarksBtn} />
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-around">
              <Button variant="outlined" onClick={addStocksBtn}>Add</Button>
              <Button variant="outlined">Reset</Button>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
    </Stack>
  )
}
