import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h2>Wookies-Movies</h2>
      <nav>
        <NavLink to="/" className="navLinks">
          Home
        </NavLink>
        <NavLink to="/search" className="navLinks">
          Search
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
