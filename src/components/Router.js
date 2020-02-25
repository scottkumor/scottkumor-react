import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import './../assets/css/layout.css'
import './../assets/css/style.css'

class Router extends Component {
    state = {
        currentPage: "Home"
      };
    
      handlePageChange = page => {
        this.setState({ currentPage: page });
      };
    
      renderPage = () => {
        if (this.state.currentPage === "Contact") {
          return <Contact />;
        } else if (this.state.currentPage === "About") {
          return <About />;
        } else if (this.state.currentPage === "Portfolio") {
          return <Portfolio />;
        } else {
          return <Home />;
        }
      };

  render() {
    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Router;
