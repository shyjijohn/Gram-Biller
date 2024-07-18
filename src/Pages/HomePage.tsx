import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PercentIcon from '@mui/icons-material/Percent';
import SettingsIcon from '@mui/icons-material/Settings';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { ServiceManager } from '../Db_From_Client';
import { Rates } from './BillData';
import { blue } from '@mui/material/colors';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "chart.js/auto";  // do this for this error (error msg: category is not a registered scale.)
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentIcon from '@mui/icons-material/Payment';
import BalanceIcon from '@mui/icons-material/Balance';


const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function HomePage() {

  const [goldRate, setGoldRate] = useState<number>(0);
  const [silverRate, setSilverRate] = useState<number>(0);
  const PORT = 3000;

  function handleGoldRate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleGoldRate", e.target.value);
    setGoldRate(parseFloat(e.target.value));
  };

  function handleSilverRate(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("handleSilverRate", e.target.value);
    setSilverRate(parseFloat(e.target.value));
  };

  function updatingRateBtn() {
    const RatesFromHomePage: Rates = {
      Gold_Rate: goldRate,
      Silver_Rate: silverRate,
    }
    ServiceManager.updatingRate(RatesFromHomePage)
    //   console.log("inside updatingRateBtn.....")     

    //   axios.put(`http://localhost:${PORT}/AddRateUpdates`, {
    //     Gold_Rate: goldRate,
    //     Silver_Rate: silverRate
    // })
    // .then((response) => {
    //   console.log('Data posted:', response.data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  }

  return (
    // <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row" sx={{ display: "flex", alignSelf: "end" }}>
    // <Card sx={{
    //   maxWidth: '60%',
    //   bgcolor: "white",
    //   alignSelf: "center",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center"
    // }}>
    //   <CardContent sx={{ maxWidth: '100%' }}>
    //     <Box
    //       display="flex"
    //       alignItems="center"
    //       gap={4}
    //       p={2}
    //       sx={{ border: '2px solid ', maxWidth: '100%' }}
    //     >
    //       <Stack sx={{ maxWidth: '100%' }}>
    //         <Stack padding={2} spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '100%' }}>
    //           <Typography sx={{ alignSelf: "left" }}>
    //             Gold Rate
    //           </Typography >
    //           <TextField id="outlined-basic" variant="outlined" size="small" type="number" value={goldRate} onChange={handleGoldRate}/>
    //         </Stack>

    //         <Stack padding={2} spacing={2} direction="row" justifyContent="space-between" sx={{ maxWidth: '100%' }}>
    //           <Typography sx={{ alignSelf: "left" }}>
    //             Silver Rate
    //           </Typography >
    //           <TextField id="outlined-basic" variant="outlined" size="small" type="number" value={silverRate} onChange={handleSilverRate} />
    //         </Stack>

    //         <Button variant="outlined" onClick={updatingRateBtn}>Update</Button>

    //       </Stack>
    //     </Box>
    //   </CardContent>
    // </Card>
    // </Stack>
    <Stack alignSelf="center" spacing={2} direction="row" >
      <Stack direction="column" sx={{ width: '70%', height: 'full' }}>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ height: '10%' }}>
          <ThemeProvider theme={theme}>
            <Typography sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 22 }}>Hi, FRANK!</Typography>
          </ThemeProvider>

          <Typography sx={{ fontSize: 14 }}>Home Branch</Typography>
        </Stack>
        <Stack direction="row" paddingY={2} spacing={2} sx={{ height: '30%', width: 'full' }}>
          <Card sx={{
            width: '25%',
            bgcolor: "white",
            alignSelf: "center",
            display: "flex",
            alignItems: "left",
            justifyContent: "left"
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <ThemeProvider theme={theme}>
                  <ReceiptIcon />
                  <Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>25</Typography>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 14 }}>No.of Sales</Typography>
                  <Stack direction="row"><Typography sx={{ color: 'green', fontSize: 10 }}>132.56%</Typography><Typography sx={{ fontSize: 10 }}>of last month</Typography></Stack>
                </ThemeProvider>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{
            width: '25%',
            bgcolor: "white",
            alignSelf: "center",
            display: "flex",
            alignItems: "left",
            justifyContent: "left"
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <ThemeProvider theme={theme}>
                  <GroupsIcon />
                  <Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>20</Typography>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 14 }}>No.of Customers</Typography>
                  <Stack direction="row"><Typography sx={{ color: 'red', fontSize: 10 }}>10.54%</Typography><Typography sx={{ fontSize: 10 }}>of last month</Typography></Stack>
                </ThemeProvider>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{
            width: '25%',
            bgcolor: "white",
            alignSelf: "center",
            display: "flex",
            alignItems: "left",
            justifyContent: "left"
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <ThemeProvider theme={theme}>
                  <PaymentIcon />
                  <Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>56.86</Typography>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 14 }}>Avg. Bill Size</Typography>
                  <Stack direction="row"><Typography sx={{ color: 'red', fontSize: 10 }}>56.35%</Typography><Typography sx={{ fontSize: 10 }}>of last month</Typography></Stack>
                </ThemeProvider>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{
            width: '25%',
            bgcolor: "white",
            alignSelf: "center",
            display: "flex",
            alignItems: "left",
            justifyContent: "left"
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
                <ThemeProvider theme={theme}>
                  <BalanceIcon />
                  <Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>1432.67</Typography>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 14 }}>Balance</Typography>
                  <Stack direction="row"><Typography sx={{ color: 'red', fontSize: 10 }}>11.54%</Typography><Typography sx={{ fontSize: 10 }}>of last month</Typography></Stack>
                </ThemeProvider>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack sx={{ height: '80%'}}>
        <Card>
          <CardContent>
            <Stack direction="column">
              <ThemeProvider theme={theme}>
                <Typography alignSelf="self-start" sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 16 }}>MONTHLY SALES</Typography>
              </ThemeProvider>
              <Bar
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                  datasets: [
                    {
                      label: 'Sales',
                      data: [100, 400, 300, 900, 300, 500, 700, 600, 300, 500, 200, 1000],
                      backgroundColor: "DodgerBlue",
                      borderColor: "lightGray",
                    }]
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5
                    }
                  }
                }} />
            </Stack>
          </CardContent>
        </Card>
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ width: '30%', height: 'full' }}>
        <Stack direction="row" justifyContent="space-between" height="8%">
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
            {/* <Typography lineHeight={0.5}>Gold Rate</Typography> */}
            <TextField id="standard-basic" variant='standard' label="Gold Rate" size='small' sx={{ width: '70%' }} type="number" value={goldRate} onChange={handleGoldRate}></TextField>
          </Stack>
          <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
            {/* <Typography lineHeight={0.5}>Silver Rate</Typography> */}
            <TextField id="standard-basic" variant='standard' label="Silver Rate" size='small' sx={{ width: '70%' }} type="number" value={silverRate} onChange={handleSilverRate}></TextField>
          </Stack>
          <Button variant="contained" sx={{ width: '30%', height: '60%', margin: '10px' }}>Update</Button>
        </Stack>

        <Stack sx={{ height: '45%', width: '100%' }}>
          <Card sx={{
            width: '100%',
            height: '100%',
            bgcolor: "white",
            display: "flex",
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <ThemeProvider theme={theme}>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 16 }}>Expenses</Typography>
                    <Typography sx={{ fontSize: 13 }}>For the current month</Typography>
                  </Stack>
                  <Stack direction="column">
                    <Stack direction="row"><Typography sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 22, color: 'grey' }}>INR  </Typography><Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>100.65</Typography></Stack>
                    <Stack direction="row"><Typography sx={{ color: 'red', fontSize: 13 }}>0.00%</Typography><Typography sx={{ fontSize: 13 }}>of last month</Typography></Stack>
                  </Stack>
                  <Line
                data={{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                  datasets: [
                    {
                      label: 'Expense',
                      data: [100, 200, 300, 200, 100, 400, 100, 600, 900, 500, 200, 1000],
                      backgroundColor: "lightgrey",
                      borderColor: "DodgerBlue",
                    }]
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5
                    }
                  }
                }} />
                </Stack>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Stack>

        <Stack sx={{ height: '45%', width: '100%' }}>
          <Card sx={{
            width: '100%',
            height: '100%',
            bgcolor: "white",
            display: "flex",
          }}>
            <CardContent sx={{ maxWidth: '100%' }}>
              <ThemeProvider theme={theme}>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 16 }}>Revenue</Typography>
                    <Typography sx={{ fontSize: 13 }}>For the current month</Typography>
                  </Stack>
                  <Stack direction="column">
                    <Stack direction="row"><Typography sx={{ fontFamily: '"Segoe UI Emoji"', fontWeight: 'bold', fontSize: 22, color: 'grey' }}>INR  </Typography><Typography sx={{ fontWeight: 'bold', fontSize: 22 }}>1106.65</Typography></Stack>
                    <Stack direction="row"><Typography sx={{ color: 'red', fontSize: 13 }}>22.72%</Typography><Typography sx={{ fontSize: 13 }}>of last month</Typography></Stack>
                  </Stack>
                  <Line
                data={{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                  datasets: [
                    {
                      label: 'Revenue',
                      data: [1000, 700, 500, 900, 600, 500, 700, 300, 200, 500, 200, 300],
                      backgroundColor: "lightgrey",
                      borderColor: "DodgerBlue",
                    }]
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5
                    }
                  }
                }} />
                </Stack>
              </ThemeProvider>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Stack>
  )
}
