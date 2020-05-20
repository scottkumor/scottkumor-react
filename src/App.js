import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/index.js";
import About from "./components/pages/About/index.js";
import Portfolio from "./components/pages/Portfolio/index.js";
import Contact from "./components/pages/Contact/index.js";


function App() {
    
return (
      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  );
}


export default App;