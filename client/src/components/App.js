import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import CheckoutPage from "./CheckoutConfirm/CheckoutPage";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import FourOhFourPage from "./FourOhFourPage";

//KENNY-TEST
import SearchPage from "./SearchPage";

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
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/*">
          <FourOhFourPage></FourOhFourPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
