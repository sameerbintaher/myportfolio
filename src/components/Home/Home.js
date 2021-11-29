import React, { useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import homeLogo from "../../Assets/home-main.svg";
import { ContactUs } from "../Conatct/Contact";
import Particle from "../Particle";
import Slider from "../Slider/Slider";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/resume.pdf";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";

function Home() {
  const [expand, updateExpanded] = useState(false);
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/resume"
            onClick={() => updateExpanded(false)}
          >
            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
          </Nav.Link>
        </Nav.Item>
      </Container>
      <Home2 />
      <Slider />
      <ContactUs />
    </section>
  );
}

export default Home;
