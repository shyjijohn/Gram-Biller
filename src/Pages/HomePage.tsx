import logo from './logo.svg';
// import './App.css';
import * as React from 'react';
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


// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));


export default function HomePage() {
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    // <Box sx={{ display: 'flex' }}>
    //   <CssBaseline />
    //   <AppBar position="fixed" open={open}>
    //     <Toolbar>
    //       <IconButton
    //         color="inherit"
    //         aria-label="open drawer"
    //         onClick={handleDrawerOpen}
    //         edge="start"
    //         sx={{ mr: 2, ...(open && { display: 'none' }) }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" noWrap component="div">
    //         Gram Biller
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: drawerWidth,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="persistent"
    //     anchor="left"
    //     open={open}
    //   >
    //     <DrawerHeader>
    //       <IconButton onClick={handleDrawerClose}>
    //         {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    //       </IconButton>
    //     </DrawerHeader>
    //     <Divider />
    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <HomeIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           Home Page


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>
    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <CreateIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           Create Bill


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>
    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <AddBoxIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           Add Stock


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>

    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <CommentIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           View Bills


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>

    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <VisibilityIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           View Stocks


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>

    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <AccountBalanceIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           View Balance


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>

    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <PercentIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           View Sales


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>

    //     <List>
    //       {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
    //       <ListItemButton>
    //       <ListItemIcon>
    //               {/* {index % 2 === 0 ?  */}
    //               <SettingsIcon /> 
    //               {/* : <MailIcon />} */}
    //             </ListItemIcon>
    //         <ListItem disablePadding>
    //           User settings


    //             <ListItemText/>
    //         </ListItem>
    //         </ListItemButton>

    //       {/* ))} */}
    //     </List>
    //   </Drawer>
    //   <Main open={open}>
    //     <DrawerHeader />
    //     <Typography paragraph>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //       tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
    //       enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
    //       imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
    //       Convallis convallis tellus id interdum velit laoreet id donec ultrices.
    //       Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    //       adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
    //       nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
    //       leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
    //       feugiat vivamus at augue. At augue eget arcu dictum varius duis at
    //       consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
    //       sapien faucibus et molestie ac.
    //     </Typography>
    //     <Typography paragraph>
    //       Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
    //       eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
    //       neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
    //       tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
    //       sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
    //       tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
    //       gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
    //       et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
    //       tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
    //       eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
    //       posuere sollicitudin aliquam ultrices sagittis orci a.
    //     </Typography>
    //   </Main>
    // </Box>


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
            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Gold Rate
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Stack padding={2} spacing={2} direction="row">
              <Typography sx={{ alignSelf: "left" }}>
                Silver Rate
              </Typography >
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </Stack>

            <Button variant="outlined">Update</Button>

          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}
