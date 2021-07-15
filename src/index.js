import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Products from "./components/Products";
import Menu from "./components/Menu";

import Product1 from "./components/Product1";
import { BrowserRouter, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <switch>
      <Menu />
      <Products />
      <Route path="/product1" component={Product1} />
    </switch>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
