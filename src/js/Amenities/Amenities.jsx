import React from 'react'
import { FaWifi } from "react-icons/fa";
import "../../css/amenites.css"
import { IoFootballOutline } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";

import { FaPersonSwimming } from "react-icons/fa6";

import { TbAirConditioning } from "react-icons/tb";
import { CiWifiOn } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
function Amenities() {
  return (
    <>
      <div className="activityServices mt-5">
  <div className="row d-flex justify-content-center align-items-center">
    <div className="col-md-3 col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined"> <FaPersonSwimming /></span>
        </div>
        <div className="activityTittle">
          <h4>SWIMMING POOL</h4>
        </div>
        <div className="activityinfo">
          <p>
          Enjoy a swim in the refreshing pools at Omkar Farm Nature.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined">  <CiWifiOn /></span>
        </div>
        <div className="activityTittle">
          <h4>AC &amp; WI-FI</h4>
        </div>
        <div className="activityinfo">
          <p>Enjoy complimentary Wi-Fi and AC amenities across all our properties..</p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined">  <FaCar /> </span>
        </div>
        <div className="activityTittle">
          <h4>PARKING AREA</h4>
        </div>
        <div className="activityinfo">
          <p>
          Complimentary parking available for your convenience at all our properties
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-3  col-sm-12 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="activityCard">
        <div className="activityIcon">
          <span className="material-symbols-outlined"> <MdOutlineRoomService /> </span>
        </div>
        <div className="activityTittle">
          <h4>ROOM SERVICE</h4>
        </div>
        <div className="activityinfo">
          <p>
          Omkar Nature Farm offers prompt &amp; efficient room service for ultimate guest satisfaction
            us.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Amenities
