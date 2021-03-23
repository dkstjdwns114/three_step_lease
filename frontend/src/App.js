import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import HomePage from "./pages/HomePage";
import CoordinateMapPage from "./pages/SameCoordinatesPage";
import MainNavbar from "./components/Navigation/MainNavbar";
import CityPage from "./pages/CityPage";
import HomeTest from "./pages/HomeTest";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MainNavbar />
        {/* <div className="page-content container-fluid"> */}
        <Switch>
          <div className="content-wrapper">
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/" component={HomeTest} />
            <Route path="/same_coordinates" component={CoordinateMapPage} />
            <Route path="/city/:code" component={CityPage} />
          </div>
        </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

const appDiv = document.getElementById("page");
render(<App />, appDiv);
