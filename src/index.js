import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
