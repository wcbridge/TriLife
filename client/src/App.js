import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddTime from "./pages/AddTime";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./App.css";
import "./bulma.css";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/addtime" component={AddTime} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
