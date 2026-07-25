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
              I’m Nabil Ajwad, a Senior Software Engineer with more than five
              years of experience delivering web, mobile, fintech, and
              cloud-based products.
              <br />
              <br />

              My experience includes
              <i>
                <b className="purple">
                  {" "}
                  Flutter, Laravel, PHP, React, TypeScript, REST APIs, Firebase,
                  AWS, MySQL, and PostgreSQL
                </b>
              </i>
              , with a strong focus on secure payments, API-driven architecture,
              and reliable production delivery.
              <br />
              <br />

              I’ve developed cross-platform applications released on Google
              Play and the Apple App Store, built enterprise management
              platforms, integrated blockchain workflows, and deployed
              applications to AWS.
              <br />
              <br />

              I’m currently expanding my experience into
              <b className="purple">
                {" "}
                AI-powered applications, developer tools, cloud-native
                full-stack systems, and business process automation.
              </b>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Nabil Ajwad developer avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;