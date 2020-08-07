import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import CheckoutPage from "./CheckoutPage";


const App = () => {
  return (
    
    <Router>
      <GlobalStyles />
      <Switch>
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
