import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Obaidullah Bin Taher </span>
            from <span className="purple"> Chittagong, Bangladesh. </span>
            Currently I'm studying BSc in Computer Science and Technology in
            <span className="purple"> Tiangong University, China</span>
            <br /> <br />
            <p>
              I am a <span className="purple">Junior Full Stack Developer</span>{" "}
              who is optimistic, helpful and a quick-thinker. I have extensive
              experience in developing small apps to major managerial
              applications to suit the needs of managers or administrators. In
              addition to these abilities, I am also proficient in meeting
              deadline targets and client meetings.
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Social Media Scrolling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
