import React from 'react'
import '../../css/banner.css'
import { CiStar } from "react-icons/ci";

import { Link } from 'react-router-dom'
function Banner() {
  return (
    <>
      <div className="homeScroll">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h2 className='special-h2'>Omkar Nature Farm</h2>
            <ul>
              <li>
                <span className="material-symbols-outlined"><CiStar /></span>
              </li>
              <li>
                <span className="material-symbols-outlined"><CiStar /></span>
              </li>
              <li>
                <span className="material-symbols-outlined"><CiStar /></span>
              </li>
              <li>
                <span className="material-symbols-outlined"><CiStar /></span>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-item-center mt-5">
              <div className="buttonnav p-2">


                <Link to='/contect-us' className="programServiceButton"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"> Enquiry Now</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Banner
