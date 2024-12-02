import React from 'react'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom'
import "../../css/contectbanner.css"
function ContectBanner() {
  return (
    <>
      <div className="homeSroll">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h2 className='special-h2'>Contact Now</h2>
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
            <p>REACH US</p>
            <div className="d-flex justify-content-center align-item-center mt-5">
              <div className="buttonnav p-2">


                {/* <Link to='/contect-us' className="programServiceButton"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"> Enquiry Now</Link> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContectBanner
