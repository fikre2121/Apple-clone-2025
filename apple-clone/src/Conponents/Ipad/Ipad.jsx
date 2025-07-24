import React from 'react'
import ipadLogo from "../../assets/images/hero_logo_ipad_air__ejixj9pic0uq_medium_2x.png";
 function Ipad() {
  return (
    <>
      <section className="container-fluid ipad-home ipad-text mb-2">
        <div className="container pt-5 text-center">
          <img src={ipadLogo} alt="" className="ipad-logo" />
          <p>Two sizes. Faster chip. Does it all.</p>
          <div className="pro-btn d-flex justify-content-center align-items-center">
            <a href="" className="btn">
              learn more
            </a>
            <a href="" className="btn buy-me">
              {" "}
              buy
            </a>
          </div>

          <p className="ipad-img">hello apple intelegence</p>
        </div>
      </section>
    </>
  );
}
export default Ipad
