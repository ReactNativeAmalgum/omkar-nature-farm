import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { imagePath } from '../../media/imagePath'
const collagee = imagePath.activity
function ActivityP() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>

      <div className="homeScroll3">
        <div className="homeSection" id="home">
          <div className="homeSection" id="home">
            <div className="homeText">
              <h2 className='special-h2' style={{ color: "#fff" }}>Activity</h2>
            </div>
          </div>
        </div>
      </div>


      <section id="activity">
        <div className="titleSection">
          <h1>Best Farmstay in Wada</h1>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 aos-init aos-animate" data-aos="fade-right">
              <Fade direction='left'>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="activityText">
                      <h3>Wifi&amp; Lawn</h3>
                      <p>
                        Enjoy complimentary WiFi access along with the expansive greenery of our lush lawn at Omkar Nature Farm.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="activityText">

                      <h3>Swimming pool</h3>
                      <p>Dive into relaxation at our refreshing swimming pool. Book your stay now for the ultimate rejuvenating experience</p>

                    </div>


                  </div>
                  <div className="col-lg-12">

                    <div className="activityText">
                      <h3>Badminton</h3>
                      <p>
                        Enjoy badminton matches in our spacious court.
                      </p>
                    </div>


                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-lg-6">
              <Fade direction='zoom-in-up' duration={1000}>
                <div className="activeImage aos-init aos-animate" data-aos="zoom-in-up">
                  <img
                    src={collagee}
                    alt="Best Farmstay in Wada"
                  />
                </div>
              </Fade>

            </div>
            <div className="col-lg-3 aos-init aos-animate" data-aos="fade-left">
              <Fade direction='right'>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="activityText">
                      <h3>Cricket</h3>
                      <p>
                        Experience thrilling cricket matches in our expansive field, where players of all levels can enjoy the excitement of the game.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="activityText">
                      <h3>football</h3>
                      <p>
                        Experience thrilling football matches on our expansive field, perfect for sports enthusiasts and fun-filled gatherings.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="activityText">
                      <h3>chess and carrom</h3>
                      <p>
                        Indulge in chess and carrom in our cozy indoor lounge area for ultimate relaxation.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>

            </div>
            <div className="d-flex justify-content-center align-item-center mt-5">
              <div className="buttonnav p-2">

                <Link to="/contect-us" className="programServiceButton"
                  data-bs-toggle="modal"
                  data-bs-target="#">

                  Enquiry Now

                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default ActivityP
