import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { AccountCircle } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import customtheme from "./customtheme";
import ListItemButton from "@mui/material/ListItemButton";
import MainContent from "./MainContent";

import Home from "./GLOES/Home";
import Enrollment from "./GLOES/Enrollment";
import BenefitSummary from "./GLOES/BenefitSummary";
import AccountProfile from "./GLOES/AccountProfile";
import EmployeeInquiryUpload from "./GLOES/EmployeeInquiryUpload";
import Reports from "./GLOES/Reports";
import Maintenance from "./GLOES/Maintenance";
import UserProfile from "./GLOES/UserProfile";

import cocolife from "./assets/cocolife-horizontal.png"
const drawerWidth = 240;


// let cTheme = createTheme(customtheme);
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<Home />);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ marginTop: `20px` }}>
        <ListItemButton onClick={() => setCurrentScreen(<Home />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Home" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Enrollment />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Enrollment" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<AccountProfile />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Account Profile" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<BenefitSummary />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Benefit Summary" disableTypography="true" />
          </Typography>
        </ListItemButton>

        {/* <ListItemButton disabled>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Employee Inquiry" disableTypography="true" />
          </Typography>
        </ListItemButton> */}

        <ListItemButton
          onClick={() => setCurrentScreen(<EmployeeInquiryUpload />)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText
              primary="Employee Inquiry Upload"
              disableTypography="true"
            />
          </Typography>
        </ListItemButton>

        {/* <ListItemButton disabled>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Policy Inquiry" disableTypography="true" />
          </Typography>
        </ListItemButton> */}

        {/* <ListItemButton disabled>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Account Policy" disableTypography="true" />
          </Typography>
        </ListItemButton> */}

        <ListItemButton onClick={() => setCurrentScreen(<Reports />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Reports" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Maintenance />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Maintenance" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>

      <Divider />
      <List>
        <ListItemButton onClick={() => setCurrentScreen(<UserProfile />)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="User Profile" disableTypography="true" />
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
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{ display: "flex", height: "100%" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `100%`,

            ml: { md: `${drawerWidth}px` },
            zIndex: 2000,
            backgroundColor: "white",
            borderTop: "10px solid #005db9",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography color="primary" variant="h6" noWrap component="div">
              Cocolife MyPolicy
            </Typography> */
            }
            
            <img src={cocolife} style={{height: '25px'}}/>

            <IconButton color="primary" aria-label="profile" href="">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
              display: { sm: "block" },
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
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <MainContent screen={currentScreen} />
        </Box>
      </Box>
  );
}
export default App;
