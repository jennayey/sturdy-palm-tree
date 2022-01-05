import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import { ThemeProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ForgotPassword2 from "./ForgotPassword2";
import GLOESHome from "./GLOES/GLOESHome";
import Login from "./Login";
import MyPolicyHome from "./MyPolicy/MyPolicyHome";
import UserRegistration from "./MyPolicy/UserRegistration";
import UserRegistration2 from "./MyPolicy/UserRegistration2";
import customtheme from "./theme/customtheme";




const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function Test() {
  const theme = useTheme();
  
  return (

    <Box
    sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.primary',
      borderRadius: 1,
      p: 3,
    }}>
       {theme.palette.mode} mode
      {/* <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        <Brightness7Icon />
      </IconButton> */}
      <Login/>
    </Box>
  );
}
export default function App() {
  const coloRMode = React.useContext(ColorModeContext);
  let cTheme = createTheme(customtheme);
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette:{
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
                      default: "black",
                    },
                  }),
        },
       
      }),
    [mode]
  );

  

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        <Brightness7Icon />
      </IconButton>
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
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
