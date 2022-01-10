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
  const colorMode = React.useMemo(() => {
    console.log("USE MEMO | START SETTING STATE");
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    console.log(" USE MEMO | DONE SETTING STATE");
  }, [themeSTATE]);

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
                  primary: "rgba(13, 18, 38,1)",//headings
                  hint: "rgba(0,0,0,0.38)", //hints
                  secondary: "rgba(13, 18, 38, 0.75)",//headings
                  disabled: "rgba(255, 255, 255, 0.5)",//disabled 
                  subtitle2: "rgba(76, 88, 125, .8)"//for small heading guides
                },
                background: {
                  // default: '#eff8fa',
                  // default: "rgba(248,250,253,1)",
                  default: "white",
                  paper: "rgba(228, 229, 235, 0.2)",
                  appbar: "#fff",
                },
                header: {
                  color: "#fff",
                },
                divider: "rgba(0, 0, 0, 0.12)",
              }
            : {
                primary: {
                  main: "#005db9",
                  light: "#53a8fc"
                },
                secondary: {
                  // main: "rgba(255, 255, 255, 0.7)",
                  main: "#6eb7ff"
                },
                text: {
                  primary: "#fff",
                  hint: "rgba(255, 255, 255, 0.5)",
                  secondary: "rgba(255, 255, 255, 0.75)",//headings
                  disabled: "rgba(255, 255, 255, 0.5)",//disabled 
                  subtitle2: "rgba(201, 211, 240, .5)",//for small heading guides
                linkActive: "#6eb7ff"
                },
                background: {
                  // default: '#eff8fa',
                  // default: "rgba(248,250,253,1)",
                  default: "#171924",
                  paper: "#222531",
                },
                header: {
                  color: "#0f111c",
                },
                divider: "rgba(50, 54, 71,0.90)",
              }),
        },
        components: {
          mode,
          ...(mode === "light"
            ? {
                MuiAppBar: {
                  styleOverrides: {
                    colorDefault: {
                      backgroundColor: "#fff",
                      borderBottom: "1px solid #ddd",
                    },
                  },
                },
              }
            : {
                MuiAppBar: {
                  styleOverrides: {
                    colorDefault: {
                      backgroundImage: "none",
                      backgroundColor: "#181a26",
                      borderBottom: "1px solid rgba(50, 54, 71 ,0.90)",
                    },
                  },
                },
              }),
        },
        typography: {
          fontFamily: ["GothamBlack", "GothamMedium", "GothamRegular"],
          h1: {
            fontFamily: "GothamRegular",
          },
          h2: {
            fontFamily: "GothamRegular",
          },
          h3: {
            fontFamily: "GothamRegular",
          },
          h4: {
            fontFamily: "GothamMedium",
          },
          h5: {
            fontFamily: "GothamMedium",
          },
      
          h6: {
            fontFamily: "GothamMedium",
            fontSize: "1.1rem"
          },
      
          body1: {
            fontFamily: "GothamRegular",
            fontSize: "16px",
          },
          body2: {
            fontFamily: "GothamRegular",
            fontSize: "14px",
          },
          span: {
            fontFamily: "GothamRegular",
          },
          overline: {
            fontFamily: "GothamMedium",
          },
          caption: {
            fontFamily: "GothamRegular",
          },
          subtitle1: {
            fontFamily: "GothamRegular",
          },
          subtitle2: {
            fontFamily: "GothamMedium",
          },
          button: {
            fontFamily: "GothamMedium",
          },
        }
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
