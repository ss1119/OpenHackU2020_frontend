import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/home.js";
import Profile from "./containers/profile.js";

export class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
