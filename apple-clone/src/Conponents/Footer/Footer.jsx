import React, { useEffect } from "react";
import $ from "jquery";

function Footer() {
  useEffect(() => {
    function handleFooterToggle() {
      $(".footer-links-wrapper h3").on("click", function () {
        $(this).next("ul").slideToggle();
      });
    }

    function handleResize() {
      $(".footer-links-wrapper h3").off("click"); 
      if (window.innerWidth < 1024) {
        handleFooterToggle(); 
      }
    }

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      $(".footer-links-wrapper h3").off("click");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer>
        <div className="container-md">
          <div className="">
            <ol>
              <li>
                <p>
                  Hearing Aid and Hearing Test: The Hearing Aid feature has
                  received FDA authorization. The Hearing Test and Hearing Aid
                  features are supported on AirPods Pro 2 with the latest
                  firmware paired with a compatible iPhone or iPad with iOS 18
                  or iPadOS 18 and later and are intended for people 18 years
                  old or older. The Hearing Aid feature is also supported on a
                  compatible Mac with macOS Sequoia and later. It is intended
                  for people with perceived mild to moderate hearing loss.
                </p>
                <p>
                  Hearing Protection: The Hearing Protection feature works with
                  AirPods Pro 2 with the latest firmware when paired with a
                  compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or
                  macOS Sequoia and later. Feature is only available in the U.S.
                  and Canada. See support.apple.com/120850 for total attenuation
                  and more information. The Hearing Protection feature is not
                  suitable for protection against extremely loud impulse sounds,
                  such as gunfire, fireworks, or jackhammers, or against
                  sustained sounds louder than 110 dBA.
                </p>
              </li>
              <li>
                <p>
                  Available in two models: AirPods 4 and AirPods 4 with Active
                  Noise Cancellation.
                </p>
              </li>
              <li>
                <p>
                  Trade‑in values will vary based on the condition, year, and
                  configuration of your eligible trade‑in device. Not all
                  devices are eligible for credit. You must be at least the age
                  of majority to be eligible to trade in for credit or for an
                  Apple Gift Card. Trade‑in value may be applied toward
                  qualifying new device purchase, or added to an Apple Gift
                  Card. Actual value awarded is based on receipt of a qualifying
                  device matching the description provided when estimate was
                  made. Sales tax may be assessed on full value of a new device
                  purchase. In‑store trade‑in requires presentation of a valid
                  photo ID (local law may require saving this information).
                  Offer may not be available in all stores, and may vary between
                  in‑store and online trade‑in. Some stores may have additional
                  requirements. Apple or its trade‑in partners reserve the right
                  to refuse, cancel, or limit quantity of any trade‑in
                  transaction for any reason. More details are available from
                  Apple’s trade-in partner for trade‑in and recycling of
                  eligible devices. Restrictions and limitations may apply.
                </p>
                <p>
                  Apple Intelligence is available in beta on all iPhone 16
                  models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro),
                  and iPad and Mac models with M1 and later, with Siri and
                  device language set to English (Australia, Canada, Ireland,
                  New Zealand, South Africa, UK, or U.S.), as part of an iOS 18,
                  iPadOS 18, and macOS Sequoia software update. Additional
                  features and languages will be available in April, with more
                  languages coming over the course of the year. Languages
                  supported in 2025 include Chinese, English (India, Singapore),
                  French, German, Italian, Japanese, Korean, Portuguese,
                  Spanish, and Vietnamese.
                </p>
                <p>
                  A subscription is required for Apple Arcade, Apple Fitness+,
                  Apple Music, and Apple TV+.
                </p>
                <p>
                  Features are subject to change. Some features, applications,
                  and services may not be available in all regions or all
                  languages.
                </p>
              </li>
            </ol>
          </div>
          {/* <!--  --> */}
          <div className="footer-links-wrapper container-md row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                <li>
                  <a href="#">Mac</a>
                </li>
                <li>
                  <a href="#">iPad</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">AirPods</a>
                </li>
                <li>
                  <a href="#">HomePod</a>
                </li>
                <li>
                  <a href="#">iPod touch</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>apple wallet</h3>

              <ul>
                <li>
                  <a href="#">Wallet</a>
                </li>
                <li>
                  <a href="#">Apple News+</a>
                </li>
                <li>
                  <a href="#">Apple TV+</a>
                </li>
                <li>
                  <a href="#">Apple cash</a>
                </li>
                <li>
                  <a href="#">Apple Card</a>
                </li>
                <li>
                  <a href="#">iCloud</a>
                </li>
              </ul>
              <h3>Account</h3>
              <ul>
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>

              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>

              <ul>
                <li>
                  <a href="#">Apple and Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
              </ul>
              <h3>For Education</h3>

              <ul>
                <li>
                  <a href="#">Apple and Education</a>
                </li>

                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
              <h3>For Government</h3>
              <ul>
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>

              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>

              <h3 className="apple">About Apple</h3>

              <ul>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-apple-wrapper container-md">
            More ways to shop: <a href="#">Find an Apple Store</a> or
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          {/* <!--  --> */}
          <div className="copyright-wrapper container-md row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul className="d-flex">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
