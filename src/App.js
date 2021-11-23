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
import BenefitSummary from "./GLOES/BenefitSummary";

const drawerWidth = 240;

let cTheme = createTheme(customtheme);
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<Home/>);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ marginTop: `20px` }}>
          <ListItemButton onClick={()=>setCurrentScreen(<Home/>)} >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Typography variant="body2" noWrap component="div">
              <ListItemText primary="Home" disableTypography="true" />
            </Typography>
          </ListItemButton>
          <ListItemButton onClick={()=>setCurrentScreen(<BenefitSummary/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Benefit Summary" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>

      <Divider />
      <List>
        {["User Profile", "Quick Guide", "Log Out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Typography variant="body2" noWrap component="div">
              <ListItemText primary={text} disableTypography="true" />
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={cTheme}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `100%`,

            ml: { md: `${drawerWidth}px` },
            zIndex: 2000,
            backgroundColor: "white",
            borderTop: "10px solid #005db9"
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography color="primary" variant="h6" noWrap component="div">
              Cocolife MyPolicy
            </Typography>
            
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
              display: { xs: "block", sm: "none" },
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
    </ThemeProvider>
  );
}
export default App;
