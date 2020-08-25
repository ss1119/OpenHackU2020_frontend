import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Map from "./containers/Map";

export class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" compornent={Map} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
