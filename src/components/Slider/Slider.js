// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import motors from "../../Assets/motors.jpg";
import hospital from "../../Assets/hospital.jpg";
import travel from "../../Assets/travel.jpg";
import "./Slider.css";
import { Badge, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import "./Slider.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Link } from "react-router-dom";
import Particle from "../Particle";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Slider() {
  const pdData = [
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
  ];

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container pt-5 d-flex">
        <Particle />
        <h3 className="text-white" id="works">
          <span>{"<"}Projects</span>
          {">"}
        </h3>
        <Button id="button-outline" as={Link} to="/project">
          All projects
        </Button>
      </div>

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
        {pdData.map((pd) => (
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
                      <Badge style={{ backgroundColor: "#4B5769" }}>
                        {tech}
                      </Badge>
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
