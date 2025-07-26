import React from "react";
import Cart from "../../assets/images/cart.png";
import SearchIcon from "../../assets/images/search-icon.png";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container-md header-2">
          <nav className="navbar navbar-expand-md navbar-light w-100">
            <a className="navbar-brand" href="#">
              <img src={Logo} className="apple-logo" alt="Apple Logo" />
            </a>

            {/* ✅ Bootstrap Toggler Button */}
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

            {/* ✅ Collapsible nav items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Store
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    iPad
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    iPhone
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Vision
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    AirPods
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV & Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Accessories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Support
                  </a>
                </li>
              </ul>
              {/* ✅ Icons inside navbar for responsive right align */}
              <div className="icons d-flex ms-auto">
                <a className="nav-icon" href="#">
                  <img src={SearchIcon} alt="Search" />
                </a>
                <a className="nav-icon cartt" href="#">
                  <img src={Cart} alt="Cart" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
