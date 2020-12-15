import React, { Suspense } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";

import store, { history } from "./store";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./Screens/About/main";
import Dashboard from "./Screens/Dashboard/main";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Router>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
