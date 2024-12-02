import React from 'react'
import '../../css/activity.css'
import { Fade, Slide } from "react-awesome-reveal";
function Activity() {
  return (
    <>

      <div className="activity mt-5">
        <div className="titleSection aos-init aos-animate" data-aos="fade-up">

          <Fade direction='up'>
            <h2 className="text-center">Activities &amp; Entertainment</h2>
          </Fade>

        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-6 p-0 m-0">
            <div className="fisrtImage">
              <h3>Swimming Pool &amp; Many more</h3>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 p-0 m-0">
            <div className="row">
              <div className="col-lg-12 col-sm-12 p-0 m-0">
                <div className="secondImage">
                  <h3>Lawn</h3>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 p-0 m-0">
                <div className="thiredImage">
                  <h3>Get Together</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Activity
