import React from 'react'

 function Watch() {
  return (
    <>
      <section className="watch-home">
        <div className="container-fluid">
          <div className="row">
            <div className="watch-1 text-center watch mb-2 col-md-6">
              <div className="pro-text pt-5">
                <h2 className="black">MacBook Air</h2>
                <p className="subhead">Thinstant Classic.</p>
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
            <div className="pro-text-container watch-2 text-center watch col-md-6">
              <div className="pro-text pt-4">
                <img
                  src="images/promo_logo_apple_watch_series_10__qk5vaa89vnm2_medium_2x.png"
                  alt=""
                  className="watch-logo"
                />
                <p className="text-center subhead white">
                  United by rhthm.Discover the <br />
                  new Black Unity watch band and face.
                </p>
              </div>
              <div className="pro-btn d-flex justify-content-center align-items-center">
                <a href="" className="btn buy-me">
                  {" "}
                  buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Watch
