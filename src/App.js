import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/index.js";
import About from "./components/pages/About/index.js";
import Portfolio from "./components/pages/Portfolio/index.js";
import Contact from "./components/pages/Contact/index.js";



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;