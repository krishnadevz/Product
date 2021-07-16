import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Products from "./components/Products";

import Product1 from "./components/Product1";
import { BrowserRouter, Route,Switch } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
<Route exact path="/" component={Products}/>
      <Route path="/product1" component={Product1} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
