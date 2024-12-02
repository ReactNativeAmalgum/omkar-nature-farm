import React from 'react'
import { FaWifi } from "react-icons/fa";

import { IoFootballOutline } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";

import { FaPersonSwimming } from "react-icons/fa6";

import { TbAirConditioning } from "react-icons/tb";

import { CiStar } from "react-icons/ci";

import "../../css/accomo.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Amenities from '../Amenities/Amenities';
import { Fade, Slide } from "react-awesome-reveal";
import { imagePath } from '../../media/imagePath'
import { MetaTags } from 'react-meta-tags';

const vila = imagePath.bannerfinal
const villa = imagePath.accobg
const villla = imagePath.bannerfinal
const room1 = imagePath.room1
const bedroomm = imagePath.room3

function AccomodationP() {
  return (
    <>

      <MetaTags>
        <title>Farmhouse with Private Pool in Wada | Omkar Nature Farm</title>
        <meta title="Farmhouse with Private Pool in Wada | Omkar Nature Farm" />
        <meta name="description" content="Farmhouse in Wada, Farmhouse in Wada for Family, Best Farmstay in Wada, Farmhouse for Events in Wada, Farmhouse with Private Pool in Wada, Private Farmhouse in Wada, Farmstay near Wada," />
        <link rel="canonical" href="https://omkarnaturefarm.in/" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equisv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Farmhouse with Private Pool in Wada | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/" />
        <meta property="og:description" content="Indulge in luxury and serenity at our Farmhouse with a Private Pool in Wada. Escape the urban chaos and immerse yourself in a tranquil oasis." />
        <meta property="og:image" content="https://kinararesort.in/static/media/logo.146c55d2a549f20e2963.png" />
      </MetaTags>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="homeScrollImage-one">
            <div className="homeSection" id="home">
              <div className="homeText">
                <div className="titleSection">
                  <h2 className='special-h2'>Accommodation</h2>
                </div>
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
                <p>RURAL RETREAT</p>
                <div className="d-flex justify-content-center align-item-center mt-5">
                  <div className="buttonnav p-2">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeScrollImage-two">
            <div className="homeSection" id="home">
              <div className="homeText">
                <div className="titleSection">
                  <h1>Accommodation</h1>
                </div>
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
                <p>RURAL RETREAT</p>
                <div className="d-flex justify-content-center align-item-center mt-5">
                  <div className="buttonnav p-2">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeScrollImage-three">
            <div className="homeSection" id="home">
              <div className="homeText">
                <div className="titleSection">
                  <h1>Accommodation</h1>
                </div>
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
                <p>RURAL RETREAT</p>
                <div className="d-flex justify-content-center align-item-center mt-5">
                  <div className="buttonnav p-2">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
      <div className='container-fluid'>
      <h1 style={{fontFamily:'Platypi'}} className='titleSection'> Farmhouse with Private Pool in Wada</h1>
      </div>
      <div className="partnerProgram" id="partner">
        <div className="partnerProgramForm">
          <div className="formTitleSection">
            <div className="closeProgram closeProgram1">
              <i className="fa fa-times" />
            </div>
            <div className="formTitle">
              <h2>Booking form</h2>
            </div>
          </div>
          <div className="login-box">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="t-datepicker">
                  <div className="t-check-in">
                    <div className="t-dates t-date-check-in">
                      <span className="material-symbols-outlined">
                        {" "}
                        calendar_month{" "}
                      </span>
                      <label className="t-date-info-title">Check In</label>
                    </div>
                    <input
                      type="hidden"
                      className="t-input-check-in"
                      defaultValue="null"
                      name="t-start"
                    />
                  </div>
                  <div className="t-check-out">
                    <div className="t-dates t-date-check-out">
                      <span className="material-symbols-outlined">
                        {" "}
                        calendar_month{" "}
                      </span>
                      <label className="t-date-info-title">Check Out</label>
                    </div>
                    <input
                      type="hidden"
                      className="t-input-check-out"
                      defaultValue="null"
                      name="t-end"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="user-box">
                  <input
                    type="text"
                    className="custNameValidation custName1"
                    name=""
                    required=""
                  />
                  <span className="CustNameError" style={{ color: "red" }} />
                  <label>Full Name</label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="user-box">
                  <input
                    type="number"
                    className="custPhoneValidation custPhone1"
                    name=""
                    required=""
                  />
                  <span className="MobileNoError" style={{ color: "red" }} />
                  <label>Phone Number</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="user-box">
                  <input
                    type="mail"
                    className="custEmailValidation custEmail1"
                    name=""
                    required=""
                  />
                  <span className="EmailError" style={{ color: "red" }} />
                  <label>E-mail</label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="user-box">
                  <input
                    type="number"
                    className="custMemberValidation custMembers1"
                    name=""
                    required=""
                  />
                  <span className="membersError" style={{ color: "red" }} />
                  <label>No of Person</label>
                </div>
              </div>
            </div>
            <div className="row">
              <p style={{ color: "red" }}>
                <strong>Note:</strong>Check In day start at 12:00 p.m &amp; ends at
                11:00 a.m
              </p>
            </div>
            <button value="submit" type="submit" className="submit FormSubmit">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* =============================Accommodation====================== */}
      <section id="room" className="p-0">
        <div className="titleSection">

        </div>
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-6 imagee">
              <Fade direction='left'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={room1} alt="Farmhouse with Private Pool in Wada" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={bedroomm} alt="Farmhouse with Private Pool in Wada" />
                  </SwiperSlide>
                  {/* <SwiperSlide>
           <img src={bedr} alt="" />
        </SwiperSlide> */}

                </Swiper>
              </Fade>


            </div>
            <div className="col-md-6 col-sm-6">
              <Fade direction='right'>
                <div className="rmbx aos-init aos-animate" data-aos="fade-left">
                  <h3>A/C Room</h3>
                  <div className="room-content">
                    <p>
                      Relax in our cozy AC rooms, where large windows allow ample natural light and a refreshing breeze. Enjoy modern amenities amidst a serene ambiance, ensuring a comfortable and rejuvenating stay. Whether for leisure or business, our rooms offer the perfect retreat after a day of exploration or work, promising a peaceful haven for all our guests.
                    </p>
                    <div className="roomServices">
                      <ul>
                        <li>
                          <span className="material-symbols-outlined"> <FaWifi /> </span>
                          <p>Wifi</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined"><IoFootballOutline /></span>
                          <p>Football</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined"><MdSportsCricket /></span>
                          <p>Mini Bar</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined"><FaPersonSwimming /></span>
                          <p>swimming pool</p>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-item-center mt-5">
                      <div className="buttonnav p-2">
                        <Link to="/contect-us" className="programServiceButton"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          Enquiry Now
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5">
            <div className="col-md-6 col-sm-6 order-2 order-md-1">
              <Fade direction='left'>
                <div className="rmbx aos-init aos-animate" data-aos="fade-right">
                  <h3>Villa</h3>
                  <div className="room-content">
                    <p>
                      "Indulge in luxury and sophistication in our exquisite villas. Experience opulent living spaces, breathtaking views, and unparalleled comfort. Whether it's a romantic getaway or a family retreat, our villas offer the perfect blend of elegance and relaxation. Reserve your villa now for an unforgettable escape into luxury at our farm house."
                    </p>
                    <div className="roomServices">
                      <ul>
                        <li>
                          <span className="material-symbols-outlined"><FaWifi /> </span>
                          <p>WIFI</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined"> <IoFootballOutline /> </span>
                          <p>Football</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined">
                            {" "}
                            <TbAirConditioning />{" "}
                          </span>
                          <p>AC</p>
                        </li>
                        <li>
                          <span className="material-symbols-outlined"> <FaPersonSwimming /> </span>
                          <p>Swimming</p>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-center align-item-center mt-5">
                      <div className="buttonnav p-2">

                        <Link to="/contect-us" className="programServiceButton"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          Enquiry Now

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

            </div>
            <div className="col-md-6 col-sm-6 order-1 order-md-2 imagee">
              <Fade direction='right'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={vila} alt="Farmhouse with Private Pool in Wada" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={villa} alt="Farmhouse with Private Pool in Wada" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={villla} alt="Farmhouse with Private Pool in Wada" />
                  </SwiperSlide>

                </Swiper>
              </Fade>

            </div>
          </div>
        </div>

      </section>
      <section>
        <Amenities />
      </section>
      <section id="package">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="rules d-flex flex-column justify-content-center align-items-start">
                <h3>Rules &amp; Regulations</h3>
                <ul>
                  <li>Alcohol : In room only.</li>
                  <li>Smoking: In smoking zone.</li>
                </ul>
                <h3>Refund Policy</h3>
                <ul>
                  <li>
                    Cancellation 5 days before Check inn date 100% full refund
                  </li>
                  <li>No payment refund after check inn in room</li>
                </ul>
              </div>
              <div className="buttonnav text-center mb-5">
                <a
                  href=""
                  className=""
                  data-bs-toggle="modal"
                  data-bs-target="#policyModal"
                >
                  Know More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mt-5 mb-5">Rooms &amp; Package</h3>


              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Villa's</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>(MONDAY TO THURSDAY)</strong>
                      </li>
                      <li>₹2,000 With Person</li>
                      <li>₹6000 With All meal plan</li>
                    </ul>
                    <ul>
                      <li>
                        <strong>(FRIDAY TO SUNDAY)</strong>
                      </li>
                      <li>₹2,500 Weekend</li>
                      <li>₹6000 With All Meal Plan</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>

                    A/C Room
                    <i className="fa fa-angle-down" aria-hidden="true" />

                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>(MONDAY TO THURSDAY )</strong>
                      </li>
                      <li>₹2,000  Per Person</li>
                      {/* <li>₹4000 with all Meal Plan</li> */}
                    </ul>
                    <ul>
                      <li>
                        <strong>(FRIDAY TO SUNDAY)</strong>
                      </li>
                      <li>₹2,500 Per Person</li>
                      {/* <li>₹4500 with all Meal Plan</li> */}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="buttonnav text-center mt-5">
                <Link to="/contect-us" className="programServiceButton"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Book Now

                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Modal */}
      <div
        className="modal fade"
        id="policyModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="policyModalTitle">
                Rules &amp; Regulations
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body" id="policyModalBody">
              <ul>
                <li>
                  A hotel day starts at 12:00 p.m. on the day of arrival and ends at
                  11:00 a.m. of the following day. Failure to check out by 11:00
                  a.m. will result in an additional fee for extending a hotel day.
                </li>
                <li>
                  A charge for the extension until 4:00 p.m. amounts to ₹1500 for
                  Cottage room &amp; for Classic room ₹1000…, after 4:00 p.m. the
                  hotel will charge for an additional hotel day.
                </li>
                <li>
                  The Resort reserves the right to pre-authorize your credit card
                  upon check-in or collect a fee for the entire stay in the form of
                  a cash deposit.
                </li>
                <li>
                  The resort may refuse to accept the guests who grossly violated
                  the Hotel Rules and Regulations during the last stay by damaging
                  the hotel's or guests' property or by inflicting damage on other
                  guests, hotel employees or other persons staying in the hotel or
                  in other way violated the stay of other guests or the functioning
                  of the hotel
                </li>
                <li>
                  The resort accepts guests traveling with pets. Only one pet is
                  allowed per room for an extra charge and the guest bears full
                  responsibility for any damage caused by their pet. Pets must be
                  leashed in common areas. Due to hygienic reasons.
                </li>
                <li>
                  When leaving the room, guests are expected to check whether the
                  door is properly locked. Loss of a room key is subject to an extra
                  charge of ₹300..
                </li>
                <li>No loud music after 10:30PM …</li>
                <li>
                  The hotel guest bears financial liability for damaging or
                  destroying the hotel's equipment and technical devices due to
                  their fault or due to the fault of their visitors.
                </li>
                <li>
                  Room heaters, electric irons and other similar devices which are
                  not a part of the hotel room equipment are not allowed to be used
                  inside the rooms due to the fire safety.
                </li>
                <li>
                  Smoking in hotel rooms, corridor, and reception hall is
                  prohibited.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default AccomodationP
