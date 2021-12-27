 import React from 'react'
 import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import customtheme from "./theme/customtheme";

import MyPolicyHome from "./MyPolicy/MyPolicyHome"

import ForgotPassword from "./ForgotPassword"
import ForgotPassword2 from "./ForgotPassword2"
import UserRegistration from "./MyPolicy/UserRegistration" 
import UserRegistration2 from "./MyPolicy/UserRegistration2" 
import GLOESHome from "./GLOES/GLOESHome";

 export default function App() {
  let cTheme = createTheme(customtheme);

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
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
            default: "white"
          },
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
            default: "#121212"
  
          },
          }),
    },
  });
  
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);
  
   return (
    <BrowserRouter>
    <ThemeProvider theme={cTheme}>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="gloes" element={<GLOESHome />}/>
        <Route path="mypolicy" element={<MyPolicyHome />}/>
        <Route path="forgot-password" element={<ForgotPassword />}/>
        <Route path="forgot-password-email" element={<ForgotPassword2 />}/>
        <Route path="registration" element={<UserRegistration />}/>
        <Route path="registration-step2" element={<UserRegistration2 />}/>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
   )
 }
 