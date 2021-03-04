import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { render } from "react-dom";
import HomePage from "./pages/HomePage";
import CoordinateMapPage from "./pages/CoordinateMapPage";
import MainNavbar from "./components/Navigation/MainNavbar";
import SideNavbar from "./components/Navigation/SideNavbar";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MainNavbar />
        <div className="page-content">
          <SideNavbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/coordinate_map" component={CoordinateMapPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
