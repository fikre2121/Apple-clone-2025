import React from 'react'

 function Airpods() {
  return (
    <>
      <section className="airpod-home">
        <div className="container-fluid">
          <div className="row">
            <div className="pro-text-container airpod-1 text-center col-md-6 mb-2">
              <h2 className="white">Airpods Pro 2</h2>
              <p className="subhead white">
                Now with hearing Aiid feature.<sup>1</sup>
              </p>

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
            <div className="pro-text-container airpod-2 text-center col-md-6 mb-2">
              <div className="pro-text">
                <h2 className="white">Airpods 4</h2>
                <p className="subhead white">
                  iconic. now supersonic.
                  <br />
                  Available with Active Noise Cancellation.<sup>2</sup>
                </p>
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
          </div>
        </div>
      </section>
    </>
  );
}
export default Airpods