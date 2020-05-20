// import React, { useState, useEffect } from "react";
// import "./style.css";
// import { CSSTransition } from "react-transition-group";
// import { BrowserRouter, Link, Switch, Route, } from "react-router-dom";
// import Home from "./../pages/Home";
// import About from "./../pages/About";
// import Portfolio from "./../pages/Portfolio";
// import Contact from "./../pages/Contact";


// export default function Nav() {
//   const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 700px)");
//     mediaQuery.addListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const handleMediaQueryChange = mediaQuery => {
//     if (mediaQuery.matches) {
//       setIsSmallScreen(true);
//     } else {
//       setIsSmallScreen(false);
//     }
//   };

//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };

//   return (

//     <BrowserRouter>

//       <header className="Header">
//         <div className="Wrapper">
//           <div className="Container">
//             <div className="Logo" alt="logo">Scott Kumor</div>
//             <button onClick={toggleNav} className="Menu">
//               +
//             </button>
//           </div>
//           <CSSTransition
//             in={!isSmallScreen || isNavVisible}
//             timeout={350}
//             classNames="NavAnimation"
//             unmountOnExit
//           >
//             <nav className="Nav">
//               <Link to="/">Home</Link>
//               <Link to="/about">About</Link>
//               <Link to="/portfolio">Portfolio</Link>
//               <Link to="/contact">Contact</Link>
//             </nav>
//           </CSSTransition>
//         </div>
//       </header>

//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/portfolio">
//           <Portfolio />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//       </Switch>

//     </BrowserRouter>

//   );
// }

import React, { Component } from 'react';
// import { CSSTransition } from "react-transition-group";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Nav extends Component {
  state = {
    toggle: false
  }
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const links = [
      {
        link: "/",
        text: "Home"
      },
      {
        link: "/about",
        text: "About"
      },
      {
        link: "/portfolio",
        text: "Portfolio"
      },
      {
        link: "/contact",
        text: "Contact"
      }
    ];


    return (

    <div className="navBar">
      <div className="logo">
        Scott Kumor
      </div>
      <div className="headWrap"> 
            
            <FontAwesomeIcon
              id="toggle"
              icon={faPlus} 
              className={this.state.toggle ? "toggled " : "toggle "} 
              onClick={this.Toggle}
              />
          </div>
          <div className={this.state.toggle ? "links show-nav" : "links hide-nav"}>
            {
              links.map((objLink, i) => {
                return (
                    <NavLink activeStyle={{
                      fontWeight: "bold",
                      color: "red"
                    }} className="navLink" key={i} to={objLink.link}>{objLink.text}</NavLink>
                    
                    )
              })
            }
          </div>

        </div>

      // <BrowserRouter>
        /* <div className="navBar">
          <div className="headWrap"> */
            
            /* <FontAwesomeIcon
              id="toggle"
              icon={faPlus} 
              className={this.state.toggle ? "toggled " : "toggle "} 
              onClick={this.Toggle}
              />
          </div>
          <div className={this.state.toggle ? "links show-nav" : "links hide-nav"}>
            {
              links.map((objLink, i) => {
                return (
                    <NavLink  className="navLink" key={i} href={objLink.link}>{objLink.text}</NavLink>
                  )
              })
            }
          </div>

        </div> */

        /* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch> */
      /* </BrowserRouter> */


    );
  }
}