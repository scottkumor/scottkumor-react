import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/index.js";
import About from "./components/pages/About/index.js";
import Portfolio from "./components/pages/Portfolio/index.js";
import Contact from "./components/pages/Contact/index.js";



class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL + '/'}>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/' component={Home} />
        </Switch>
      </HashRouter>
    );
  };
};


export default App;