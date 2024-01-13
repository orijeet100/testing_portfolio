import React from 'react'

const ReactJs = () => {
    return (
        <div>
            <section className="projects">
        <div className="max-width">
          <h2 className="title">Full-Stack Application</h2>

          <div className="carousel owl-carousel">
            <div className="card">
              <a href="https://github.com/orijeet100/weight-tracking-CRUD" target="_blank">
                <div className="box">
                  <img src="assets/images/weight-tracking.webp" alt="" />
                  <div className="text">
                    Weight Tracking App <br />
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://github.com/orijeet100/Flash-chat-app" target="_blank">
                <div className="box">
                  <img src="assets/images/flash.jpg" alt="" />
                  <div className="text">
                    Flash Chat App <br />
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://github.com/orijeet100/Weather-app" target="_blank">
                <div className="box">
                  <img src="assets/images/weather.jpg" alt="" />
                  <div className="text">
                    Weather Forecasting <br /> App
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://github.com/orijeet100/GS-Coin" target="_blank">
                <div className="box">
                  <img src="assets/images/jewel.jpeg" alt="" />
                  <div className="text">
                    Jewellery E- <br />Commerce App
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default ReactJs
