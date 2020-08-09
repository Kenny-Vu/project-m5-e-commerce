import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CheckoutPage from "./CheckoutPage";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Redirect to="/items" />
        </Route>
        <Route exact path="/items">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/items/:itemId">
          <ItemPage></ItemPage>
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage></CheckoutPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
