import React from "react";
import { Switch, Route } from "react-router-dom";
import 'normalize.css';
import "./App.css";
import Home from "./components/pages/Home/index.js";
import About from "./components/pages/About/index.js";
import Portfolio from "./components/pages/Portfolio/index.js";
import Contact from "./components/pages/Contact/index.js";



function App() {
    
return (
      
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
  );
}


export default App;