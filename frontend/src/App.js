import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import MainNavbar from "./components/Navigation/MainNavbar";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/city/:code" component={CityPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

const appDiv = document.getElementById("page");
render(<App />, appDiv);
