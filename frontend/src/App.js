import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import PrevSameCoordinatesPage from "./pages/PrevSameCoordinatesPage";
import MainNavbar from "./components/Navigation/MainNavbar";
import PrevCityPage from "./pages/PrevCityPage";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MainNavbar />
        <Switch>
          <div className="content-wrapper">
            <Route exact path="/" component={HomePage} />
            <Route
              path="/same_coordinates"
              component={PrevSameCoordinatesPage}
            />
            <Route path="/city/:code" component={CityPage} />
          </div>
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("page");
render(<App />, appDiv);
