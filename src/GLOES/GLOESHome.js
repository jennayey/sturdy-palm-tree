
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
import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
import MainContent from "./../MainContent";

import Home from "./HomeContent";
import Enrollment from "./Enrollment";
import BenefitSummary from "./BenefitSummary";
import AccountProfile from "./AccountProfile";
import EmployeeInquiryUpload from "./EmployeeInquiryUpload";
import Reports from "./Reports";
import Maintenance from "./Maintenance";
import UserProfile from "./UserProfile";

import cocolife from "./../assets/cocolife-horizontal.png"
const drawerWidth = 240;


// let cTheme = createTheme(customtheme);
export default function GLOESHome(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<Home />);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      
      <List sx={{ mt: 5 }}>
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
          <Typography variant="body2" component="div">
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
        backgroundColor: "white",
        borderTop: "10px solid #005db9",
        boxShadow: 'none',
            borderBottom: '1px solid #ddd',
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
      <IconButton
          color="primary"
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
          <img src={cocolife} style={{ height: "20px" }} />
        </Box>
        <Typography
          color="primary"
          variant="subtitle"
          noWrap
          component="div"
        >
          GLOES
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
