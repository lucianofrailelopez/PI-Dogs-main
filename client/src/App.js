import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/landingPage";
import HomePage from "./components/Home/homePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/HomePage" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
