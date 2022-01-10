import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { saveState } from "./localStorage";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

//Subscribe()
//Saves the state (from store.js) automatically(Using Subscribe()) when value is updated. 
//Stores data in local storage in browser using saveState() in localStorage.js
store.subscribe(() => {
  saveState(store.getState());
  console.log("saved state hehe");
});

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
