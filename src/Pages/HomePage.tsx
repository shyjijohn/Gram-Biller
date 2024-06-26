import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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

  function updatingRateBtn()
  {
    console.log("inside updatingRateBtn.....")     

    axios.put(`http://localhost:${PORT}/AddRateUpdates`, {
      Gold_Rate: goldRate,
      Silver_Rate: silverRate
  })
  .then((response) => {
    console.log('Data posted:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }
  
  return (
    <Stack alignSelf="center" justifyContent="center" spacing={2} direction="row" sx={{ display: "flex", alignSelf: "end" }}>
    <Card sx={{
      maxWidth: '60%',
      bgcolor: "white",
      alignSelf: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <CardContent sx={{ border: '2px solid grey', maxWidth: '100%' }}>
        <Box
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: '2px solid red', maxWidth: '100%' }}
        >
          <Stack sx={{ border: '2px solid blue', maxWidth: '100%' }}>
            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between" sx={{ border: '2px solid red', maxWidth: '100%' }}>
              <Typography sx={{ alignSelf: "left" }}>
                Gold Rate
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" type="number" value={goldRate} onChange={handleGoldRate}/>
            </Stack>

            <Stack padding={2} spacing={2} direction="row" justifyContent="space-between" sx={{ border: '2px solid green', maxWidth: '100%' }}>
              <Typography sx={{ alignSelf: "left" }}>
                Silver Rate
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" type="number" value={silverRate} onChange={handleSilverRate} />
            </Stack>

            <Button variant="outlined" onClick={updatingRateBtn}>Update</Button>

          </Stack>
        </Box>
      </CardContent>
    </Card>
    </Stack>
  )
}
