import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [status, setStatus] = useState("");
  const activate = () => {
    if (status === "") {
      setStatus("is-active");
    } else if (status === "is-active") {
      setStatus("");
    }
    console.log(status);
  };
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
          className={`navbar-burger ${status}`}
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

      <div id="navbarBasicExample" className={`navbar-menu ${status}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item" onClick={activate}>
            Home
          </Link>

          <Link to="/color" className="navbar-item" onClick={activate}>
            Color
          </Link>
        </div>
      </div>
    </nav>
  );
}
