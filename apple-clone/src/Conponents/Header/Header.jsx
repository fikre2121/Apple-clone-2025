import React from "react";
import Cart from "../../assets/images/cart.png";
import SearchIcon from "../../assets/images/search-icon.png";
import Logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <header className="header">
        <div className="container-md header-2">
          <nav className="navbar navbar-expand-md navbar-light w-100">
            <Link className="navbar-brand" to="/">
              <img src={Logo} className="apple-logo" alt="Apple Logo" />
            </Link>

            {/*  Bootstrap Toggler Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/*  Collapsible nav items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="macbook">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="ipad">
                    iPad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="iphone16">
                    iPhone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="watch">
                    Watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Vision
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="airpods">
                    AirPods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="carousel">
                    TV & Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accessories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Support
                  </Link>
                </li>
              </ul>
              {/*  Icons inside navbar for responsive right align */}
              <div className="icons d-flex ms-auto">
                <Link className="nav-icon" to="#">
                  <img src={SearchIcon} alt="Search" />
                </Link>
                <Link className="nav-icon cartt" to="#">
                  <img src={Cart} alt="Cart" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
