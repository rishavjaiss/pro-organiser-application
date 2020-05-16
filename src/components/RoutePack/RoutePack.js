import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import CreateBoard from "../CreateBoard/CreateBoard.js";
import Home from "../Home/Home.js";
import BoardDetails from "../BoardDetails/BoardDetails.js";
import NotFound from "../NotFound/NotFound.js";

function RoutePack() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createboard" component={CreateBoard} />
        <Route path="/home/:id" component={BoardDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default RoutePack;
