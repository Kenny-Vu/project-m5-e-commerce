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
import SignIn from "./SignIn";
import VisualHomePage from "./VisualHomePage";

//KENNY-TEST
import SearchPage from "./SearchPage";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <VisualHomePage />
        </Route>
        <Route exact path="/items">
          <HomePage />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/*">
          <FourOhFourPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
