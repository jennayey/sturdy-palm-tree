import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";

// const theme = useTheme();
// const colorMode = React.useContext(ColorModeContext);
import { saveState } from './localStorage'

import {configureStore} from '@reduxjs/toolkit'
import { createStore } from 'redux'
import themeReducer from './features/Theming/ThemeModeSlice'


store.subscribe(()=>{
  saveState(store.getState());
  console.log ('saved state hehe ')
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
