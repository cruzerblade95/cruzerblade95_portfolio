import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m{" "}
            <span className="purple">Nabil Ajwad Rosedi</span> from{" "}
            <span className="purple">
              Alor Setar, Kedah, Malaysia
            </span>
            .
            <br />
            <br />

            I’m a <span className="purple">Senior Software Engineer</span>{" "}
            with more than five years of experience building production web,
            mobile, fintech, and cloud applications.
            <br />
            <br />

            I have contributed to secure payment systems, enterprise platforms,
            mobile applications released on major app stores, blockchain
            integrations, and AI-enabled developer tools.
            <br />
            <br />

            My core technologies include{" "}
            <span className="purple">
              Flutter, Laravel, PHP, React, TypeScript, REST APIs, Firebase,
              AWS, MySQL, and PostgreSQL
            </span>
            .
            <br />
            <br />

            I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building useful AI and automation products
            </li>

            <li className="about-activity">
              <ImPointRight /> Designing reliable APIs and full-stack systems
            </li>

            <li className="about-activity">
              <ImPointRight /> Developing cross-platform Flutter applications
            </li>

            <li className="about-activity">
              <ImPointRight /> Deploying and maintaining cloud applications
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring fintech and Web3 technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Build valuable products with purpose, precision, and reliability.”
          </p>

          <footer className="blockquote-footer">Nabil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;