import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";

function NavBar() {
  const { pathname } = useLocation();
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

      <nav>
        <ul
          id="primary-navigation"
          data-visible={primaryNavState}
          className="primary-navigation underline-indicators letter-spacing-2 flex ff-sans-cond uppercase"
        >
          <li className={pathname === "/" ? "active" : null}>
            <Link to="/">
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>

          <li className={pathname === "/destination" ? "active" : null}>
            <Link to="/destination">
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>

          <li className={pathname === "/crew" ? "active" : null}>
            <Link to="/crew">
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>

          <li className={pathname === "/technology" ? "active" : null}>
            <Link to="/technology">
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
