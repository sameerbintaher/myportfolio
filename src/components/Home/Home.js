import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { ContactUs } from "../Conatct/Contact";
import Particle from "../Particle";
import Slider from "../Slider/Slider";
import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        data-aos="fade-right"
        id="home"
        style={{ height: "90vh" }}
      >
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> OBAIDULLAH BIN TAHER</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid mt-md-0 mt-5 mb-5"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <div className="d-flex justify-content-center align-items-center resume">
          <a
            data-aos="fade-up-right"
            href="https://drive.google.com/file/d/1HcvH01K7tRljm1bgoB-uQcAd1EnygAVK/view"
            className="nav-link active text-white mb-5"
            target="blank"
          >
            <Button id="button-outline"> My Resume </Button>
          </a>
          <a
            data-aos="fade-up-left"
            href="https://www.linkedin.com/in/sameerbintaher/"
            className="nav-link active text-white mb-5"
            target="blank"
          >
            <Button id="button-outline"> Hire Me </Button>
          </a>
        </div>
      </Container>

      <Home2 />

      <Slider />

      <ContactUs />
    </section>
  );
}

export default Home;
