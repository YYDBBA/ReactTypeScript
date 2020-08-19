import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import "./index.css";
import AppRouter from "./router/router";
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
