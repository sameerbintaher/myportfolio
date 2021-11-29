import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import { ContactUs } from "../Conatct/Contact";
import Particle from "../Particle";
import Slider from "../Slider/Slider";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
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
      <a
        href="https://drive.google.com/file/d/1HcvH01K7tRljm1bgoB-uQcAd1EnygAVK/view"
        className="nav-link active text-white mb-5"
        target="blank"
      >
        <Button id="button-outline"> My Resume </Button>
      </a>
      <Home2 />
      <Slider />

      <ContactUs />
    </section>
  );
}

export default Home;
