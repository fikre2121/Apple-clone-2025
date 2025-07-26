import React from 'react'
import tradeIn from "../../assets/images/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png";

 function MacBookAir() {
  return (
    <>
      <section className="trade-home">
        <div className="container-fluid">
          <div className="row g-md-3">
            <div className="trade-1 text-center mb-2 col-md-6">
              <div className="pro-text pt-4">
                <h2 className="black">MacBook Air</h2>
                <p className="subhead">Lean.mean.M3 mashine.</p>
              </div>
              <div className="pro-btn d-flex justify-content-center align-items-center">
                <a href="" className="btn">
                  learn more
                </a>
                <a href="" className="btn buy-me">
                  {" "}
                  buy
                </a>
              </div>
            </div>
            <div className="pro-text-container trade-2 text-center pt-4 col-md-6">
              <div className="pro-text pt-3">
                <img
                  src={tradeIn}
                  alt="image"
                  className="trade-logo"
                />
                <p>Lean.mean.M3 mashine.</p>
              </div>
              <div className="pro-btn d-flex justify-content-center align-items-center">
                <a href="#" className="btn">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MacBookAir
