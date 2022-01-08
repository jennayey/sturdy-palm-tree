import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import cocolife from "../assets/cocolife-horizontal.png";
import cocolifeWhite from "../assets/cocolife-horizontal-white.png";
import MainContent from "./../MainContent";
import BasicInformation from "./BasicInformation";
import Coverages from "./Coverages";
import History from "./History";
import Ledger from "./Ledger";
import Loans from "./Loans";
import Others from "./Others";
import UpdateInternetAccount from "./UpdateInternetAccount";

import DarkModeSwitch from '../components/DarkModeSwitch'
const drawerWidth = 240;

// let cTheme = createTheme(customtheme);
function MyPolicyHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<BasicInformation/>);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />

      <List sx={{ mt: 5}}>
        <ListItemButton onClick={()=> setCurrentScreen(<BasicInformation/>)}>
          <ListItemIcon color="inherit">
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Basic Information" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={()=> setCurrentScreen(<Coverages/>)}>
          <ListItemIcon>
            <InboxIcon color="inherit"/>
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Coverages" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={()=> setCurrentScreen(<Ledger/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Ledger" disableTypography="true" />
          </Typography>
        </ListItemButton>  
        
         <ListItemButton onClick={()=> setCurrentScreen(<Loans/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Loans" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <ListItemButton onClick={()=> setCurrentScreen(<History/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="History" disableTypography="true" />
          </Typography>
        </ListItemButton>
            
        <ListItemButton onClick={()=> setCurrentScreen(<Others/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Others" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton color="primary">
          <ListItemIcon>
            <InboxIcon color="inherit"/>
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Pay Online" disableTypography="true" />
          </Typography>
        </ListItemButton>

  
      </List>
      <Divider />
      <List> 
        <ListItemButton  onClick={()=> setCurrentScreen(<UpdateInternetAccount/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Internet Account" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Quick Guide" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Log Out" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <DarkModeSwitch/>

  
      </List>
    
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
     <Box sx={{display: {xs: 'block', md:'flex'}}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `100%`,

            ml: { md: `${drawerWidth}px` },
            zIndex: 2000,
            color: 'primary.main',
            // backgroundColor: "default.background",
            borderTop: "10px solid #005db9",
            boxShadow: 'none',
            borderBottom: '1px solid #ddd'
          }}
          enableColorOnDark
        >
          <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
          <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            alignItems="center"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={cocolifeWhite} style={{ height: "20px" }} />
            </Box>
            <Typography
              color="primary"
              variant="subtitle"
              noWrap
              component="div"
            >
              MyPolicy
            </Typography>
          </Stack>
          

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { xs: drawerWidth }, flexShrink: { md: 0} }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              padding: '20px',
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="div"
          sx={{
            height: "100%",
            flexGrow: 1,
            p: 3,
            width: {xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
           }}
        >
          <MainContent screen={currentScreen} />
        </Box>
      </Box>
  );
}
export default MyPolicyHome;
