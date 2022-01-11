import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import { lightMode, darkMode } from "../features/Theming/ThemeModeSlice";
import { Button } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
function DarkModeSwitch() {
  console.log("DARKMODESWITCH.js | Before Use Selector");
  const themeSTATE = useSelector((state) => state.theme.value);
  console.log("DARKMODESWITCH.js | Called Use Selector");

  let dispatch = useDispatch();
  const toggleColorMode = () => {
    if (themeSTATE === "dark") {
      dispatch(lightMode())
      console.log("component test light activated");
    } else {
      dispatch(darkMode())
      console.log("component test dark activated");
    }
  };
  return (
    <div>
      <ListItemButton onClick={toggleColorMode}>
          <ListItemIcon color="inherit">
          {themeSTATE === "dark" ?  <Brightness2RoundedIcon /> : <Brightness7Icon />}
          </ListItemIcon>
          <Typography variant="body2" noWrap component="div">
            <ListItemText primary={themeSTATE === "dark" ? "Dark Mode" : "Light Mode"} disableTypography="true" />
          </Typography>
        </ListItemButton>

      {/* <Button
        variant="contained"
        onClick={toggleColorMode}
        startIcon={themeSTATE === "dark" ?  <Brightness2RoundedIcon /> : <Brightness7Icon />}
      >
        Dark Mode
      </Button> */}
     </div>
      
  );
}
export default DarkModeSwitch;
