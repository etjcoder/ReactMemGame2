import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Memory Game
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to= {process.env.PUBLIC_URL + '/'}
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Rules
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={process.env.PUBLIC_URL + '/play'}
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Play Game
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
