
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
import cocolife from "./../assets/cocolife-horizontal.png";
import DarkModeSwitch from "./../components/DarkModeSwitch";
import MainContent from "./../MainContent";
import AccountProfile from "./AccountProfile";
import BenefitSummary from "./BenefitSummary";
import EmployeeInquiryUpload from "./EmployeeInquiryUpload";
import Enrollment from "./Enrollment";
import Home from "./HomeContent";
import Maintenance from "./Maintenance";
import MaintenanceSite from "./MaintenanceSite"
import Reports from "./Reports";
import UserProfile from "./UserProfile";
import PolicyInquiry from "./PolicyInquiry";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Policy } from "@mui/icons-material";
import EmployeeInquiry from "./EmployeeInquiry";
import Collapse from '@mui/material/Collapse'
import AccountProfileForm from "./AccountProfileForm";
const drawerWidth = 240;
import QuickGuide from "./QuickGuide";
// let cTheme = createTheme(customtheme);
export default function GLOESHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(<Home />);
  const [openDropdown, setOpenDropdown ] = React.useState(false);
  const [openDropdown2, setOpenDropdown2 ] = React.useState(false);
  const [openDropdown3, setOpenDropdown3 ] = React.useState(false);

const clickDropdown = () => {
  setOpenDropdown(!openDropdown)
}
const clickDropdown2 = () => {
  setOpenDropdown2(!openDropdown2)
}
const clickDropdown3 = () => {
  setOpenDropdown3(!openDropdown2)
}
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />

      <List sx={{ mt: 5 }}>
        <ListItemButton onClick={() => setCurrentScreen(<Home />)}>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Home" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => setCurrentScreen(<Enrollment />)}>
          <ListItemIcon>
            <AddCircleOutlineRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Enrollment" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={clickDropdown}>
          <ListItemIcon>
            <ManageAccountsRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Account Profile" disableTypography="true" />
          </Typography>
        </ListItemButton>
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7}}  onClick={() => setCurrentScreen(<AccountProfileForm/>)}>
        
          <Typography variant="caption" noWrap component="div">
            <ListItemText primary="My Account Profile"  disableTypography="true"/>
            </Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 7}} onClick={() => setCurrentScreen(<AccountProfile/>)}>
        
        <Typography variant="caption" noWrap component="div">
          <ListItemText primary="Movements"  disableTypography="true"/>
          </Typography>
        </ListItemButton>

        </List>
      </Collapse>


        <ListItemButton onClick={() => setCurrentScreen(<BenefitSummary />)}>
          <ListItemIcon>
            <AssignmentTurnedInRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Benefit Summary" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={clickDropdown2}>
          <ListItemIcon>
            <UploadRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Employee Inquiry" disableTypography="true" />
          </Typography>
        </ListItemButton>

      
        <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7}}   onClick={() => setCurrentScreen(<EmployeeInquiry/>)}>
        
          <Typography variant="caption" noWrap component="div">
            <ListItemText primary="Employee Inquiry"  disableTypography="true"/>
            </Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 7}} onClick={() => setCurrentScreen(<EmployeeInquiryUpload/>)}>
        
        <Typography variant="caption" noWrap component="div">
          <ListItemText primary="Employee Inquiry Upload"  disableTypography="true"/>
          </Typography>
        </ListItemButton>

        </List>
      </Collapse>
        <ListItemButton onClick={() => setCurrentScreen(<PolicyInquiry />)}>
          <ListItemIcon>
            <AddCircleOutlineRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Policy Inquiry" disableTypography="true" />
          </Typography>
        </ListItemButton>

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
            <AssessmentRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Reports" disableTypography="true" />
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={clickDropdown3}>
          <ListItemIcon>
            <MiscellaneousServicesRoundedIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="Maintenance" disableTypography="true" />
          </Typography>
        </ListItemButton>
      </List>
      <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7}}   onClick={() => setCurrentScreen(<Maintenance/>)}>
        
          <Typography variant="caption" noWrap component="div">
            <ListItemText primary="Seach Employee"  disableTypography="true"/>
            </Typography>
          </ListItemButton>
          <ListItemButton sx={{ pl: 7}} onClick={() => setCurrentScreen(<MaintenanceSite/>)}>
        
        <Typography variant="caption" noWrap component="div">
          <ListItemText primary="Search Site"  disableTypography="true"/>
          </Typography>
        </ListItemButton>

        </List>
      </Collapse>

      <Divider />
      <List>
        <ListItemButton onClick={() => setCurrentScreen(<UserProfile />)}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary="User Profile" disableTypography="true" />
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

<List> <DarkModeSwitch/></List>
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
              <img src={cocolife} style={{ height: "20px" }} />
            </Box>
            <Typography
              color="text.primary"
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
