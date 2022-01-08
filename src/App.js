// import { ThemeProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ForgotPassword2 from "./ForgotPassword2";
import GLOESHome from "./GLOES/GLOESHome";
import { saveState } from "./localStorage";
import Login from "./Login";
import MyPolicyHome from "./MyPolicy/MyPolicyHome";
import UserRegistration from "./MyPolicy/UserRegistration";
import UserRegistration2 from "./MyPolicy/UserRegistration2";
import store from "./store";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const themeSTATE = useSelector((state) => state.theme.value);
  console.log("APP.JS | Called USE SELECTOR");
  const [mode, setMode] = React.useState(themeSTATE);
  const colorMode = React.useMemo(
    () => {
      console.log("USE MEMO | START SETTING STATE");
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        console.log(" USE MEMO | DONE SETTING STATE");
    
    },
    [themeSTATE],
  );
  
 
  console.log("1. ThemeSTATE: " + themeSTATE + " | Mode: " + mode);

  // store.subscribe(() => {
  //   console.log("subscribe is happening");
  //   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //   console.log("setting mode lol");
  // });

 


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#005db9",
                },
                secondary: {
                  main: "#00af43",
                },
                text: {
                  primary: "rgba(43,39,39,0.91)",
                  hint: "rgba(0,0,0,0.38)",
                },
                background: {
                  // default: '#eff8fa',
                  // default: "rgba(248,250,253,1)",
                  default: "white",
                  paper: "#fff",
                },
                divider: "rgba(0, 0, 0, 0.12)",
              }
            : {
                primary: {
                  main: "#fff",
                },
                secondary: {
                  main: "rgba(255, 255, 255, 0.7)",
                },
                text: {
                  primary: "#fff",
                  hint: "rgba(0,0,0,0.38)",
                },
                background: {
                  // default: '#eff8fa',
                  // default: "rgba(248,250,253,1)",
                  default: "#222531",
                  paper: "#222531",
                },
                divider: "rgba(255, 255, 255, 0.12)",
              }),
        },
      }),
    [mode]
  );

  return (
    <BrowserRouter>
          <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="gloes" element={<GLOESHome />} />
          <Route path="mypolicy" element={<MyPolicyHome />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="forgot-password-email" element={<ForgotPassword2 />} />
          <Route path="registration" element={<UserRegistration />} />
          <Route path="registration-step2" element={<UserRegistration2 />} />
        </Routes>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
