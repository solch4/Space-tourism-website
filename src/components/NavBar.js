import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const logo = "assets/shared/logo.svg";
const close = "assets/shared/icon-close.svg";
const hamburger = "assets/shared/icon-hamburger.svg";

function NavBar() {
  const [primaryNavState, setprimaryNavState] = useState(false);
  const [navToggleState, setnavToggleState] = useState(false);
  const handleClick = () => {
    setprimaryNavState(!primaryNavState);
    setnavToggleState(!navToggleState);
  };

  return (
    <header className="primary-header fs-300 flex">
      <img className="logo" src={logo} alt="Logo" />

      <button
        onClick={handleClick}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={navToggleState}
      >
        <img src={primaryNavState ? close : hamburger} alt="Menu" />
        <span className="sr-only">Menu</span>
      </button>

      <nav
        id="primary-navigation"
        data-visible={primaryNavState}
        className="primary-navigation underline-indicators letter-spacing-2 flex ff-sans-cond uppercase"
      >
        <NavLink to="/">
          <span aria-hidden="true">00</span>Home
        </NavLink>

        <NavLink to="/destination">
          <span aria-hidden="true">01</span>Destination
        </NavLink>

        <NavLink to="/crew">
          <span aria-hidden="true">02</span>Crew
        </NavLink>

        <NavLink to="/technology">
          <span aria-hidden="true">03</span>Technology
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
