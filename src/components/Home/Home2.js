import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Nabil Ajwad, a software engineer focused on building scalable web, mobile, and cloud solutions for modern businesses.
              <br />
              <br />
              My experience spans
              <i>
                <b className="purple">
                  {" "}Flutter, Laravel, React.js, REST APIs, Firebase, AWS, and MySQL/PostgreSQL{" "}
                </b>
              </i>
              , with a strong focus on fintech products, secure payment flows, and reliable deployment.
              <br />
              <br />
              I enjoy turning complex requirements into user-friendly products and have worked across the full delivery lifecycle from architecture and development to testing and deployment.
              <br />
              <br />
              I’m especially interested in
              <b className="purple"> fintech platforms, API-driven systems, and AI-enabled product features.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
