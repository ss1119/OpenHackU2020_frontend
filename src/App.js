import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Map from "./containers/Map";
import Home from "./containers/home.js";

export class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
