import React,{useEffect} from "react";
import Cart from "../../assets/images/cart.png";
import SearchIcon from "../../assets/images/search-icon.png";
import Logo from "../../assets/images/logo.png";
import $ from "jquery";

function Header() {
  useEffect(() => {
    const $naves = $(".navbar-collapse");
    const $toggler = $(".toggler");

    $toggler.on("click", function () {
      $(this).toggleClass("fa-xmark");
      $naves.toggleClass("active");
    });

    // Cleanup to avoid memory leaks
    return () => {
      $toggler.off("click");
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container-md header-2">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="#">
              <img src={Logo}className="apple-logo" />
            </a>

            {/* <!-- Collapsible nav items --> */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
            </div>
          </nav>
          <div className="icons">
            <a className="nav-icon" href="#">
              <img src={SearchIcon} alt="Search" />
            </a>
            <a className="nav-icon cartt " href="#">
              <img src={Cart} alt="Cart" />
            </a>
            <a href="#">
              <i className="fa-solid fa-bars toggler"></i>
            </a>
          </div>
        </div>
      </header>
      
    </>
  );
}
export default Header;
