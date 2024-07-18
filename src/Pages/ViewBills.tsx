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
import { useState } from 'react';
import axios from 'axios';
import { viewBills } from './BillData';
import { ServiceManager } from '../Db_From_Client';
import dayjs, { Dayjs } from 'dayjs';






const columns: GridColDef[] = [
  { field: 'no', headerName: 'No', width: 10 },
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'phoneNo', headerName: 'Phone No', width: 100 },
  { field: 'invoiceNo', headerName: 'Invoice No', type: 'number', width: 80 },
  { field: 'date', headerName: 'Date', type: 'number', width: 60 },
  { field: 'address', headerName: 'Address', type: 'number', width: 90 },
  { field: 'goldWeight', headerName: 'Gold Weight', type: 'number', width: 120 },
  { field: 'silverWeight', headerName: 'Silver Weight', type: 'number', width: 120 },
  { field: 'oldItemWeight', headerName: 'Old Item Weight', type: 'number', width: 140 },
  { field: 'discount', headerName: 'Discount', type: 'number', width: 90 },
  { field: 'billAmount', headerName: 'Bill Amount', type: 'number' },
];

// const rows:viewBills[] = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];




export default function ViewBills() {

  const [name, setName] = useState<string>('');
  const [invoiceNo, setInvoiceNo] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [rows, setRows] = useState<viewBills[]>([]);
  const [selectedDateFrom, setSelectedDateFrom] = useState<Dayjs | null>();
  const [selectedDateTo, setSelectedDateTo] = useState<Dayjs | null>();


  const PORT = 3000;



  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleName", e.target.value);
    setName(e.target.value);
  };

  function handleInvoiceNo(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleInvoiceNo", e.target.value);
    setInvoiceNo(e.target.value);
  };

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setPhone(newValue);
    if (validatePhoneNumber(newValue)) {
      setError(false);
      setHelperText('');
    } else {
      setError(true);
      setHelperText('Invalid phone number. Please enter a 10-digit number.');
    }
  };

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleDateChangeFrom = (newDate: Dayjs | null) => {
    // if (newDate !== null) {
    setSelectedDateFrom(newDate);
    // }
  };

  const handleDateChangeTo = (newDate: Dayjs | null) => {
    // if (newDate !== null) {
    setSelectedDateTo(newDate);
    // }
  };

  function handleNameSearch() {
    setRows([])

    // axios.get(`http://localhost:${PORT}/GetViewBillUsingName?Name=${name}`).then((response) => {
    //   console.log("response.data.....", response.data);

    //   var viewBillsUsingNameArr: viewBills[] = [];

    //   (response.data).forEach((data: any) => {
    //     const BillUsingName: viewBills = {
    //       id: data.Create_Bill_id,
    //       name: data.Name,
    //       phoneNo: data.Phone,
    //       invoiceNo: data.Invoice_No,
    //       date: data.Date,
    //       address: data.Address,
    //       goldWeight: data.Gold_Rate,
    //       silverWeight: data.Silver_Rate,
    //       oldItemWeight: data.Old_Gold_Total_Weight,
    //       discount: data.Discount,
    //       billAmount: data.Total
    //     }
    //     viewBillsUsingNameArr.push(BillUsingName)
    //   })
    //   setRows(viewBillsUsingNameArr)
    // });

    var viewBillsUsingNameArr: viewBills[] = [];
    viewBillsUsingNameArr = ServiceManager.viewBillUsingName(name)
    console.log("viewBillsUsingNameArr", viewBillsUsingNameArr)
    setRows(viewBillsUsingNameArr)
  };



  function handleInvoiceNoSearch() {
    setRows([])

    // axios.get(`http://localhost:${PORT}/GetViewBillUsingInvoiceNo?Invoice_No=${invoiceNo}`).then((response) => {
    //   console.log("response.data.....", response.data);
    //   var viewBillsUsingInvoiceArr: viewBills[] = [];

    //   (response.data).forEach((data: any) => {
    //     const BillUsingInvoice: viewBills = {
    //       id: data.Create_Bill_id,
    //       name: data.Name,
    //       phoneNo: data.Phone,
    //       invoiceNo: data.Invoice_No,
    //       date: data.Date,
    //       address: data.Address,
    //       goldWeight: data.Gold_Rate,
    //       silverWeight: data.Silver_Rate,
    //       oldItemWeight: data.Old_Gold_Total_Weight,
    //       discount: data.Discount,
    //       billAmount: data.Total
    //     }
    //     viewBillsUsingInvoiceArr.push(BillUsingInvoice)
    //   })
    //   setRows(viewBillsUsingInvoiceArr)
    // });

    var viewBillsUsingInvoiceArr: viewBills[] = [];
    viewBillsUsingInvoiceArr = ServiceManager.viewBillUsingInvoice(invoiceNo)
    setRows(viewBillsUsingInvoiceArr)
  };


  function handlePhoneNoSearch() {
    setRows([])

    // axios.get(`http://localhost:${PORT}/GetViewBillUsingPhoneNo?Phone=${phone}`).then((response) => {
    //   console.log("response.data.....", response.data);
    //   var viewBillsUsingPhoneArr: viewBills[] = [];

    //   (response.data).forEach((data: any) => {
    //     const BillUsingPhone: viewBills = {
    //       id: data.Create_Bill_id,
    //       name: data.Name,
    //       phoneNo: data.Phone,
    //       invoiceNo: data.Invoice_No,
    //       date: data.Date,
    //       address: data.Address,
    //       goldWeight: data.Gold_Rate,
    //       silverWeight: data.Silver_Rate,
    //       oldItemWeight: data.Old_Gold_Total_Weight,
    //       discount: data.Discount,
    //       billAmount: data.Total
    //     }
    //     viewBillsUsingPhoneArr.push(BillUsingPhone)
    //   })
    //   setRows(viewBillsUsingPhoneArr)
    // });

    var viewBillsUsingPhoneArr: viewBills[] = [];
    viewBillsUsingPhoneArr = ServiceManager.viewBillUsingPhone(phone)
    setRows(viewBillsUsingPhoneArr)
  };


  function handleDatesSearch() {
    setRows([])

    // axios.get(`http://localhost:${PORT}/GetViewBillUsingDates?Date=${selectedDateFrom}&Date=${selectedDateTo}`).then((response) => {
    //   console.log("response.data.....", response.data);
    //   var viewBillsUsingDatesArr: viewBills[] = [];

    //   (response.data).forEach((data: any) => {
    //     const BillUsingDates: viewBills = {
    //       id: data.Create_Bill_id,
    //       name: data.Name,
    //       phoneNo: data.Phone,
    //       invoiceNo: data.Invoice_No,
    //       date: data.Date,
    //       address: data.Address,
    //       goldWeight: data.Gold_Rate,
    //       silverWeight: data.Silver_Rate,
    //       oldItemWeight: data.Old_Gold_Total_Weight,
    //       discount: data.Discount,
    //       billAmount: data.Total
    //     }
    //     viewBillsUsingDatesArr.push(BillUsingDates)
    //   })
    //   setRows(viewBillsUsingDatesArr)
    // });

    var viewBillsUsingDatesArr: viewBills[] = [];
    if (selectedDateFrom != null && selectedDateTo != null) {
      viewBillsUsingDatesArr = ServiceManager.viewBillUsingDates(String(selectedDateFrom), String(selectedDateTo))
      setRows(viewBillsUsingDatesArr)
    }
  };


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
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
          >
            <Stack direction="column" sx={{ maxWidth: '100%' }}>
              <Stack spacing={2} direction="row" sx={{ maxWidth: '100%' }}>

                <Stack direction="column" spacing={3} sx={{alignItems: 'flex-start'}}>
                  <Typography sx={{ paddingTop: 3}}>
                    Date From:
                  </Typography>
                  <Typography>
                    Name:
                  </Typography>
                  <Typography>
                    Invoice No:
                  </Typography>
                  <Typography>
                    Phone No:
                  </Typography>
                </Stack>

                <Stack direction="column" spacing={2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        label="MM/DD/YYYY"
                        value={selectedDateFrom}
                        onChange={handleDateChangeFrom}
                        slotProps={{ textField: { variant: "standard" } }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  <TextField id="outlined-basic" variant="standard" size="small" value={name} onChange={handleName} />
                  <TextField id="outlined-basic" variant="standard" size="small" value={invoiceNo} onChange={handleInvoiceNo} />
                  <TextField id="outlined-basic" variant="standard" size="small" value={phone} onChange={handlePhone} error={error} helperText={helperText} />
                </Stack>

                <Stack direction="column" sx={{paddingTop: 3}}>
                  <Typography>
                    Date To:
                  </Typography>
                </Stack>

                <Stack direction="column" >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="MM/DD/YYYY"
                        value={selectedDateTo}
                        onChange={handleDateChangeTo}
                        slotProps={{ textField: { variant: "standard" } }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Stack>

                <Stack direction="column">
                  <Button variant="text" onClick={handleDatesSearch}>
                    <PageviewOutlinedIcon sx={{ alignSelf: "center", height: 40, width: 40, stroke: "#ffffff", strokeWidth: 1, }} />
                  </Button>
                  <Button variant="text" onClick={handleNameSearch}>
                    <PageviewOutlinedIcon sx={{ alignSelf: "center", height: 40, width: 40, stroke: "#ffffff", strokeWidth: 1, }} />
                  </Button>
                  <Button variant="text" onClick={handleInvoiceNoSearch}>
                    <PageviewOutlinedIcon sx={{ alignSelf: "center", height: 40, width: 40, stroke: "#ffffff", strokeWidth: 1, }} />
                  </Button>
                  <Button variant="text" onClick={handlePhoneNoSearch}>
                    <PageviewOutlinedIcon sx={{ alignSelf: "center", height: 40, width: 40, stroke: "#ffffff", strokeWidth: 1, }} />
                  </Button>
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
                    // checkboxSelection
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
    </Stack >
  )
}
