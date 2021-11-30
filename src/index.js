import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./GLOES/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import customtheme from "./customtheme";

let cTheme = createTheme(customtheme);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={cTheme}>
        <Routes>
          <Route path="/" element={<Login />}/>
     
          <Route path="home" element={<App />}/>

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
