import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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

import { useNavigate, useLocation } from 'react-router-dom';

import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AddStock from './Pages/AddStock';
import CreateBill from './Pages/CreateBill';
import ViewBills from './Pages/ViewBills';
import ViewStocks from './Pages/ViewStocks';
import ViewBalance from './Pages/ViewBalance';
import ViewSales from './Pages/ViewSales';
import UserSettings from './Pages/UserSettings';
import NoPage from './Pages/NoPage';
import PdfMainPage from './PdfPages/Pdf_Main_Page'
import { PDFViewer } from '@react-pdf/renderer';


import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: '#dddddd',
  height: '100vh',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Appbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const navigateToCreateBill = () => {
    navigate('/createBill');
  };

  const navigateToAddStock = () => {
    navigate('/addStock');
  };

  const navigateToViewBills = () => {
    navigate('/viewBills');
  };

  const navigateToViewStocks = () => {
    navigate('/viewStocks');
  };

  const navigateToViewBalance = () => {
    navigate('/viewBalance');
  };

  const navigateToViewSales = () => {
    navigate('/viewSales');
  };

  const navigateToUserSettings = () => {
    navigate('/userSettings');
  };


  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{height: '20px'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <ReceiptLongIcon sx={{marginRight: '10px'}}/>
          <Typography variant="h6" noWrap component="div">
            Gram Biller
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            // boxSizing: 'border-box',
            backgroundColor: 'white', // Set the color of the Drawer
            color: 'black', // Set the text color
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{backgroundColor:'white'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToHome} style={{ backgroundColor: location.pathname === '/home' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <HomeIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              Dashboard


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToCreateBill} style={{ backgroundColor: location.pathname === '/createBill' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <CreateIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              Create Bill


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToAddStock} style={{ backgroundColor: location.pathname === '/addStock' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <AddBoxIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              Add Stock


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToViewBills} style={{ backgroundColor: location.pathname === '/viewBills' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <CommentIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              View Bills


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToViewStocks} style={{ backgroundColor: location.pathname === '/viewStocks' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <VisibilityIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              View Stocks


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToViewBalance} style={{ backgroundColor: location.pathname === '/viewBalance' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <AccountBalanceIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              View Balance


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToViewSales} style={{ backgroundColor: location.pathname === '/viewSales' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <PercentIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              View Sales


              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>

        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItemButton onClick={navigateToUserSettings} style={{ backgroundColor: location.pathname === '/userSettings' ? 'DodgerBlue' : 'white' }}>
            <ListItemIcon>
              {/* {index % 2 === 0 ?  */}
              <SettingsIcon />
              {/* : <MailIcon />} */}
            </ListItemIcon>
            <ListItem disablePadding>
              User settings
              <ListItemText />
            </ListItem>
          </ListItemButton>

          {/* ))} */}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography> */}

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/createBill" element={<CreateBill />} />
          <Route path="/addStock" element={<AddStock />} />
          <Route path="/viewBills" element={<ViewBills />} />
          <Route path="/viewStocks" element={<ViewStocks />} />
          <Route path="/viewBalance" element={<ViewBalance />} />
          <Route path="/viewSales" element={<ViewSales />} />
          <Route path="/userSettings" element={<UserSettings />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/pdfMainPage" element={
          
            <PdfMainPage />
          } />
        </Routes>
      </Main>
    </Box>
  )
}
