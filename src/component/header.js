import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [status, setStatus] = useState(false);
  const activate = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    console.log(status);
  };
  const isOpen = () => {
    setStatus(false);
  };
  if (!status) {
    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={activate}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={isOpen}>
              Home
            </Link>

            <Link to="/color" className="navbar-item" onClick={isOpen}>
              Color
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger is-active"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={activate}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-active">
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={isOpen}>
              Home
            </Link>

            <Link to="/color" className="navbar-item" onClick={isOpen}>
              Color
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
