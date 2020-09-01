import React, { Component } from 'react';
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons'

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

        <div className="navMain">
          <Link to="/" className="logo">
            <FontAwesomeIcon className="logoIcon" icon={faArrowLeft} />
            <div className="logoText"> Scott Kumor </div>
            <FontAwesomeIcon className="logoIcon2" icon={faHome} />
          </Link>

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
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(239,169,144)"
                  }}
                  className="navLink"
                  key={i}
                  to={objLink.link}>{objLink.text}
                </NavLink>
              )
            })
          }
        </div>
      </div>
    );
  }
}