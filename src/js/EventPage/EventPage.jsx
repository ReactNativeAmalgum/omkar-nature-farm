import "../../css/eventt.css";
import { CiStar } from "react-icons/ci";
import { Fade } from 'react-awesome-reveal';
import { imagePath } from '../../media/imagePath'

const getTo = imagePath.event2;
const annyver = imagePath.event1;
const birthdayImage = imagePath.homeGallery1;

function EventPage() {
  return (
    <>

      <div className="homeSc">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h2 className="special-h2">Event</h2>
            <ul>
              {[...Array(4)].map((_, index) => (
                <li key={index}>
                  <span className="material-symbols-outlined"><CiStar /></span>
                </li>
              ))}
            </ul>
            <p>occasion</p>
            {/* <div className="d-flex justify-content-center align-item-center mt-5">
              <Link to='/contect-us' className="programServiceButton">
                Book Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <h1 style={{ fontFamily: 'Platypi' }} className='titleSection'>Farmhouse for Events in Wada</h1>
      </div>
      <section style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 sm-2-sm-12">
              <Fade direction="left">
                <div className="event-image">
                  <img src={birthdayImage} alt="Farmhouse for Events in Wada" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2>Birthday</h2>
                <div className="birthdaydetail">
                  <p>

                    Where birthday dreams come true! Our scenic venue offers spacious event spaces, delicious catering, and entertainment options for a memorable celebration. With professional event planning services and affordable rates, we ensure your special day is stress-free and unforgettable. Escape to the countryside and let us create magical memories for you and your guests. Contact us now to book your ultimate birthday experience!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-2">
              <div className="titleSection">
                <h2>Pre-wedding Shoot</h2>
                <div className="birthdaydetail">
                  <p> Welcome to Omkar Farm House – where we also offer picturesque pre-wedding shooting opportunities! Our stunning venue provides the perfect backdrop for capturing your love story before the big day. With sprawling outdoor areas and charming indoor spaces, we'll help you create timeless memories to cherish forever. Contact us to schedule your pre-wedding shoot and let us make your journey to 'I do' even more magical!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <Fade direction="right">
                <div className="event-image">
                  <img src={annyver} alt="Farmhouse for Events in Wada" />
                </div>
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-22">
              <Fade direction="left">
                <div className="event-image">
                  <img src={imagePath.event3} alt="Farmhouse for Events in Wada" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <div className="titleSection">
                <h2>Anniversary Celebration</h2>
                <div className="birthdaydetail">
                  <p>
                    We create enchanting moments for anniversary celebrations! Amidst the serene countryside, our venue offers intimate event spaces, gourmet catering, and tailored packages to mark your special milestone. Let us orchestrate a romantic ambiance with scenic views and impeccable service. Whether it's your first or fiftieth anniversary, make it unforgettable at Omkar Nature Farm . Contact us to plan your dream anniversary celebration today
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-2">
              <div className="titleSection">
                <h2>Get-Together</h2>
                <div className="birthdaydetail">
                  <p>
                    Welcome to our picturesque farm, the perfect venue for memorable get-togethers! Gather your loved ones amidst our scenic surroundings and spacious event spaces. Enjoy delicious catering, fun activities, and a relaxed atmosphere that fosters connections and laughter. Whether it's a family reunion, friends' gathering, or corporate retreat, let our farm be the backdrop for your unforgettable get-together. Contact us to plan your next gathering and create cherished memories together!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <Fade direction="right">
                <div className="event-image order-md-2 order-1">
                  <img src={getTo} alt="Farmhouse for Events in Wada" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventPage;
