import React from 'react'

const Wordpress = () => {
    return (
        <div>
            <section className="projects" id="projects">
        <div className="max-width">
            <div>

          <div className="title_one ">Projects </div>

            </div>
            <br/>
            <br/>
            <br/>
          <h2 className="title">Machine Learning and Data Ananlysis</h2>

          <div className="carousel owl-carousel">
            <div className="card">
              <a
                href="https://drive.google.com/drive/folders/1uYx-FcMIIBRWbFS2R9qI-zzVBgdXdkD6?usp=drive_link" target="_blank"
              >
                <div className="box">
                  <img src="assets\images\spotify.png" alt="" />
                  <div className="text">
                    Story Telling with data (Spotify) <br/>
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://drive.google.com/drive/folders/14hlll5MGaJNp4JJ1ejw_ij06hQNYW8Rq?usp=sharing" target="_blank">
                <div className="box">
                  <img src="assets/images/electron.webp" alt="" />
                  <div className="text">
                    Electron Energy Prediction <br />
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://drive.google.com/drive/u/0/folders/1WH4YXndLc5mvOEf4m5EgqtcaiztRszgf" target="_blank">
                <div className="box">
                  <img src="assets/images/ctr.jpeg" alt="" />
                  <div className="text">
                    Click Through Rate <br /> Prediction
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

export default Wordpress
