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
import customtheme from "../customtheme";
import ListItemButton from "@mui/material/ListItemButton";
import MainContent from "./../MainContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import UserRegistration from "./UserRegistration";
import BasicInformation from "./BasicInformation";
import Coverages from "./Coverages";
import Ledger from "./Ledger"
import Others from "./Others";
import Loans from "./Loans";
import cocolife from "../assets/cocolife-horizontal.png";
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
    <div>
      <Toolbar />

      <List sx={{ marginTop: `20px` }}>
        <ListItemButton onClick={()=> setCurrentScreen(<BasicInformation/>)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Basic Information" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={()=> setCurrentScreen(<Coverages/>)}>
          <ListItemIcon>
            <InboxIcon />
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
        <ListItemButton disabled>
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
        <ListItemButton >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Pay Online" disableTypography="true" />
          </Typography>
        </ListItemButton>

  
      </List>
      <Divider />
      <List>
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
              MyPolicy
            </Typography>
          </Stack>
          {/* <IconButton color="primary" aria-label="profile" href="">
            <AccountCircle />
          </IconButton> */}

          <Box  sx={{ ml: 2, display: { xs:"none", md:"block"} }}>
          <Stack
            direction="row"
            spacing={3}
            // divider={<Divider orientation="vertical" flexItem />}
            alignItems="center"
           
          >
            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="div"
              onClick={()=> setCurrentScreen(<BasicInformation/>)}
              sx={{cursor: "pointer"}}
            >
              Basic Information{" "}
            </Typography>
            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="a"
              onClick={()=> setCurrentScreen(<Coverages/>)}
              sx={{cursor: "pointer"}}
            >
              Coverage
            </Typography>

            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="a"
              onClick={()=> setCurrentScreen(<Ledger/>)}
              sx={{cursor: "pointer"}}
            >
              Ledger{" "}
            </Typography>
            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="a"
              onClick={()=> setCurrentScreen(<Loans/>)}
              sx={{cursor: "pointer"}}
              >
              Loans{" "}
            </Typography>
            <Typography
              color="text.hint"
              variant="caption"
              noWrap
              component="div"
            >
              History{" "}
            </Typography>
            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="a"
              onClick={()=> setCurrentScreen(<Others/>)}
              sx={{cursor: "pointer"}}
              >
              Others{" "}
            </Typography>
            <Typography
              color="primary"
              variant="caption"
              noWrap
              component="a"
             href="/"
              sx={{cursor: "pointer", textDecoration: "none"}}
              >
              Log Out{" "}
            </Typography>
            <Button variant="contained">
              Pay Online
            </Button>
          </Stack>
          </Box>

          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{flexShrink: { sm: 0 } }}
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
      </Box>
      <Container 
      maxWidth="lg"
        sx={{
          pt: {sm:3},
          px: {sm:1, lg: 3},
        }}
      >
        <MainContent screen={currentScreen} />
      </Container>
    </Box>
  );
}
export default MyPolicyHome;
