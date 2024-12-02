import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { imagePath } from '../../media/imagePath';

const omLogo = imagePath.logo


function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <img src={omLogo} alt="Farmhouse in Wada" />
                <p>
                  <a style={{ color: "#fff" }} href="tel:+91 7028725777">
                    {" "}
                    <strong>Phone:</strong> +91 8976256998
                  </a>
                  <br />
                  <a
                    style={{ color: "#fff" }}
                    href="mailto:eerasagroresort@gmail.com"
                  >
                    <strong>Email:</strong>farmomkarnature@gmail.com
                  </a>
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right" />
                    <Link to="/">Home</Link>

                  </li>
                  <li>
                    <i className="fa fa-chevron-right" />{" "}
                    <Link to="/family-farmhouse-wada">About US</Link>

                  </li>
                  <li>
                    <i className="S" />{" "}
                    <Link to="/farmhouse-events-wada">Event</Link>

                  </li>
                  <li>
                    <i className="fa fa-chevron-right" />{" "}
                    <Link to="/best-farmstay-wada">Activities</Link>

                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right" />
                    <Link to="/farmhouse-private-pool">Accommodation</Link>

                  </li>
                  <li>
                    <i className="fa fa-chevron-right" />{" "}
                    <Link to="/private-farmhouse-wada">Gallery</Link>

                  </li>
                  {/* <li>
              <i className="fa fa-chevron-right" />{" "}
              <Link to="">Near by Near By Attraction Points</Link>
              <a href="gallery.html"></a>
            </li> */}
                  <li>
                    <i className="fa fa-chevron-right" />
                    <Link to="/farmstay-near-wada">Contact Us</Link>

                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <div className="social-links mt-3">
                  <a
                    href="https://www.facebook.com/omkarnaturefarmwada"
                    className="facebook"
                    target="_blank"
                  >
                    <FaFacebookSquare />

                  </a>
                  <a
                    href="https://www.instagram.com/omkarnaturefarm?igsh=MWZ2emdsYWdwcnJqOA=="
                    className="instagram"
                    target="_blank"
                  >
                    <FaInstagram />

                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            {" "}
            © Copyright{" "}
            <strong>
              <span style={{ color: "#2e4e3d" }}>omkar nature farm </span>
            </strong>
            . All Rights Reserved{" "}
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://skdm.in/" style={{ color: "#f26522" }}>
              Shree Krishna Digital
            </a>{" "}
          </div>
        </div>
        <div style={{display:'none'}} >
          <p style={{color:'white', fontSize:2}}>ms</p>
        </div>
      </footer>

    </>
  )
}

export default Footer
