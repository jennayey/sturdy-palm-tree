import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import InfoIcon from "@mui/icons-material/Info";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MenuIcon from "@mui/icons-material/Menu";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
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
import DarkModeSwitch from "../components/DarkModeSwitch";
import MainContent from "./../MainContent";
import AddRemovePolicy from "./AddRemovePolicy";
import Coverages from "./Coverages";
import History from "./History";
import Ledger from "./Ledger";
import Loans from "./Loans";
import Others from "./Others";
import UpdateInternetAccount from "./UpdateInternetAccount";
import MyPolicies from "./MyPolicies";
import HomeContent from "./HomeContent";
import Collapse from '@mui/material/Collapse'
import PayOnline from "../PayOnline";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import QuickGuide from "./QuickGuide";
const drawerWidth = 240;
import Avatar from '@mui/material/Avatar';

// let cTheme = createTheme(customtheme);
function MyPolicyHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<HomeContent/>);

  const [openDropdown, setOpenDropdown ] = React.useState(false);

const clickDropdown = () => {
  setOpenDropdown(!openDropdown)
}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />

      <List sx={{ mt: 5 }}>
        <ListItemButton onClick={clickDropdown}>
          <ListItemIcon color="inherit">
            <InfoIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText
              primary="Basic Information"
              disableTypography="true"
            />
          </Typography>
        </ListItemButton>
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7}}  onClick={() => setCurrentScreen(<MyPolicies/>)}>
        
          <Typography variant="caption" noWrap component="div">
            <ListItemText primary="My Policies"  disableTypography="true"/>
            </Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 7}} onClick={() => setCurrentScreen(<AddRemovePolicy/>)}>
        
        <Typography variant="caption" noWrap component="div">
          <ListItemText primary="Add or Remove Policies"  disableTypography="true"/>
          </Typography>
        </ListItemButton>

        </List>
      </Collapse>

        <ListItemButton onClick={() => setCurrentScreen(<Coverages />)}>
          <ListItemIcon>
            <FactCheckIcon color="inherit" />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Coverages" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Ledger />)}>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Ledger" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Loans />)}>
          <ListItemIcon>
            <CreditScoreOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Loans" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <ListItemButton onClick={() => setCurrentScreen(<History />)}>
          <ListItemIcon>
            <HistoryOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="History" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Others />)}>
          <ListItemIcon>
            <SupportAgentOutlinedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Others" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton color="primary" onClick={() => setCurrentScreen(<PayOnline />)}>
          <ListItemIcon>
            <AttachMoneyOutlinedIcon color="inherit" />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Pay Online" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        {/* <ListItem>
        <Typography color="text.subtitle2" variant="overline">
              Account Details
            </Typography>
        </ListItem> */}

        <ListItemButton
          onClick={() => setCurrentScreen(<UpdateInternetAccount />)}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Internet Account" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <ListItemButton onClick={() => setCurrentScreen(<QuickGuide />)}>
          <ListItemIcon>
            <HelpOutlineRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Quick Guide" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <ExitToAppRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Log Out" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>
      <Divider />

      <List>
        {" "}
        <DarkModeSwitch />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: `100%`,
          ml: { md: `${drawerWidth}px` },
          zIndex: 2000,

          //backgroundColor: "default.background",
          borderTop: "10px solid #005db9",
          boxShadow: "none",
        }}
        enableColorOnDark
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          <div>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
          
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
              <img src={cocolife} style={{ height: "20px" }} />
            </Box>
            <Typography
              color="neutral.main"
              variant="subtitle"
              noWrap
              component="div"
            >
              MyPolicy
            </Typography>
          </Stack>
          </Stack>

          </div>
          <Avatar sx={{cursor: "pointer"}} onClick={() => setCurrentScreen(<UpdateInternetAccount />)}>N</Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { xs: drawerWidth }, flexShrink: { md: 0 } }}
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
            padding: "20px",
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
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <MainContent screen={currentScreen} />
      </Box>
    </Box>
  );
}
export default MyPolicyHome;
