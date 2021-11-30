// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import motors from "../../Assets/motors.jpg";
import hospital from "../../Assets/hospital.jpg";
import travel from "../../Assets/travel.jpg";
import education from "../../Assets/education.jpg";
import industry from "../../Assets/industry.jpg";
import book from "../../Assets/book.jpg";
import "./Slider.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import "./Slider.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function allslider() {
  const Data = [
    {
      id: 1,
      title: "Sam Motors - Your trusted shop",
      image: motors,
      description:
        "A selling product website for Bike where Customers can order a service, pay for the service, see order list. Customers can review services and update their review. Admin can add service, manage customers order status. Admin can add new admins and delete a service from database.",
      technology: [
        "ReactJS",
        "React Router V5",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "StripeJS",
        "Firebase",
        "React-Bootstrap",
        "Heroku",
        // ReactJS, React Router V5, React-Bootstrap, Firebase, JWT, Stripe Payment Gateway, 	NodeJs, Express, MongoDB, Heroku
      ],
      live: "https://sam-motors.web.app/",
      link: "https://github.com/sameerbintaher/sam-motors-client",
    },
    {
      id: 2,
      title: "Sam Travel and Tours",
      image: travel,
      description:
        "An agency website for travelling where Customers can book a place and see their place after checkout. Customers can cancel booking places. Admin can add new places in home page, manage all customers, and delete places from database.",
      technology: [
        "ReactJS",
        "React Router V5",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
        "React-Bootstrap",
        "Heroku",
      ],
      live: "https://samtravel.netlify.app/",
      link: "https://github.com/sameerbintaher/samtravel-client",
    },
    {
      id: 3,
      title: "Sam Hospital and Diagnostic Center",
      image: hospital,
      description:
        "A modern hospital website for various patients Patients can choose doctor according to their problem Patients can view doctor details and make an appointment. Patients can cancel their appointments.",
      technology: ["ReactJS", "Firebase", "React-Bootstrap", "React Router"],
      link: "https://github.com/sameerbintaher/sam-hospital",
      live: "https://samhospital.netlify.app/",
    },
    {
      id: 4,
      title: "SamPro Consultant",
      image: education,
      description:
        "You will find the education and business service. You can apply best university worldwide by discussing with consultant and  start your business by taking great advise from consultant. You can develope your programming and graphic knowledge by taking any course from this website. This is Completely responsive for mobile devices",
      technology: [
        "ReactJS",
        "React Hook",
        "React-Bootstrap",
        "React Router",
        "Custom CSS",
      ],
      link: "https://github.com/sameerbintaher/education-sameer",
      live: "https://education-sameer.netlify.app/",
    },
    {
      id: 5,
      title: "SamPro Film and Music Industry",
      image: industry,
      description:
        "This project was Completely made with React Js. I was excited while making this project. Here you will find relevant description of Indian Musician, Actor and Actress. You will find their demand for working with your industry You can make a wishlist by selecting artist for next dream show. You will get their most asking information from here.",
      technology: ["ReactJS", "React-Bootstrap", "Custom CSS"],
      link: "https://github.com/sameerbintaher/industry-sameer",
      live: "https://industry-sameer.netlify.app/",
    },
    {
      id: 6,
      title: "Sam Book House",
      image: book,
      description:
        "This is an API based based website here I used an API where located thousand of books info. You can search any kind of book here.",
      technology: ["HTML5", "Bootstrap5", "CSS3", "javascript", "DOM", "API"],
      link: "https://github.com/sameerbintaher/bookarchive-sameer",
      live: "https://bookarchive-sameer.netlify.app/",
    },
  ];

  return (
    <div
      data-aos="fade-left"
      className="mt-5"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container pt-5 d-flex justify-content-center align-items-center">
        <h3 className="purple" id="works">
          <span>{"<"} Explore my all projects</span>
          {">"}
        </h3>

        {/* <Button id="button-outline" as={Link} to="/project">
          All projects
        </Button> */}
      </div>
      <p className="text-white text-muted">Slide from right to left</p>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {Data.map((pd) => (
          <SwiperSlide>
            <div style={{ backgroundColor: "#222222" }} className="">
              <div className="">
                <img
                  style={{ width: "100%" }}
                  src={pd.image}
                  alt=""
                  srcset=""
                />
              </div>
              <div id="pd-description" className="">
                <div className="p-1 mb-2">
                  <p className="text-white">0{pd.id}</p>
                  <h3 className="purple">{pd.title}</h3>
                  <small className="text-white p-2">{pd.description}</small>
                  <br />
                  <br />
                  {pd.technology.map((tech) => (
                    <p
                      className="m-1"
                      style={{ display: "inline", fontSize: "20px" }}
                    >
                      <Button
                        style={{ backgroundColor: "#fff", marginTop: "10px" }}
                      >
                        {tech}
                      </Button>
                    </p>
                  ))}
                  <br />
                  <br />
                  <a className="icon" href={pd.link} target="blank">
                    <FontAwesomeIcon
                      className="mx-2"
                      style={{ fontSize: "30px" }}
                      icon={faGithub}
                    />
                  </a>
                  <a className="icon" href={pd.live} target="blank">
                    <FontAwesomeIcon
                      className="mx-2"
                      style={{ fontSize: "30px" }}
                      icon={faShareSquare}
                    />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
