import React from "react";
import reactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import store from "./components/Redux/store";
import { Provider } from "react-redux";

import "./styles/index.scss";

import Routes from "./Routes";

reactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
