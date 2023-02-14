import { faBars, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [showNavMobile, setShowNavMobile] = useState(false);
  //console.log(showNavMobile);
  return (
    <div>
      <nav id="nav-mobile">
        <div
          className="mobile-menu-icon"
          onClick={() => setShowNavMobile(!showNavMobile)}
          role="button"
          onKeyDown={() =>
            setShowNavMobile(!showNavMobile)
          } /* when use tab to select it and press any button this action will be done */
          tabIndex={0} /* priority when use tab */
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
        <ul className={!showNavMobile ? "nav-items nav-hidden" : "nav-items"}>
          <div
            className="mobile-menu-close"
            onClick={() => setShowNavMobile(!showNavMobile)}
            role="button"
            onKeyDown={() =>
              setShowNavMobile(!showNavMobile)
            } /* when use tab to select it and press any button this action will be done */
            tabIndex={0} /* priority when use tab */
          >
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </div>
          <li className="Btn-nav">
            <NavLink
              className="smoothscroll Btn-nav"
              to="/"
              onClick={() => setShowNavMobile(!showNavMobile)}
              role="button"
              onKeyDown={() => setShowNavMobile(!showNavMobile)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink
              className="smoothscroll Btn-nav"
              to="/aboutme"
              onClick={() => setShowNavMobile(!showNavMobile)}
              role="button"
              onKeyDown={() => setShowNavMobile(!showNavMobile)}
              tabIndex={0}
            >
              About me
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink
              className="smoothscroll"
              to="/skills"
              onClick={() => setShowNavMobile(!showNavMobile)}
              role="button"
              onKeyDown={() => setShowNavMobile(!showNavMobile)}
              tabIndex={0}
            >
              Skills
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink
              className="smoothscroll"
              to="/projects"
              onClick={() => setShowNavMobile(!showNavMobile)}
              role="button"
              onKeyDown={() => setShowNavMobile(!showNavMobile)}
              tabIndex={0}
            >
              Projects
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink
              className="smoothscroll"
              to="/contact"
              onClick={() => setShowNavMobile(!showNavMobile)}
              role="button"
              onKeyDown={() => setShowNavMobile(!showNavMobile)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li className="Btn-nav">
            <NavLink className="smoothscroll Btn-nav" to="/">
              Home
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink className="smoothscroll Btn-nav" to="/aboutme">
              About me
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink className="smoothscroll" to="/skills">
              Skills
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink className="smoothscroll" to="/projects">
              Projects
            </NavLink>
          </li>

          <li className="Btn-nav">
            <NavLink className="smoothscroll" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
