import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { lightMode, darkMode } from "../features/Theming/ThemeModeSlice";
import { Button } from "@mui/material";


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
      <Button
        variant="contained"
        onClick={toggleColorMode}
        startIcon={<Brightness7Icon />}
      >
        Dark Mode
      </Button>
     </div>
      
  );
}
export default DarkModeSwitch;
