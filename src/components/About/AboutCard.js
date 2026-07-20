import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nabil Ajwad Bin Rosedi</span>{" "}
            from <span className="purple">Alor Setar, Kedah, Malaysia</span>.
            <br />
            I’m a <span className="purple">Senior Software Engineer</span> with experience building scalable web, mobile, and cloud applications for fintech and digital transformation.
            <br />
            My background includes <span className="purple">Flutter, Laravel, React.js, REST APIs, Firebase, AWS, and MySQL/PostgreSQL</span>.
            <br />
            <br />
            I enjoy working on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building fintech and payment-focused products
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing robust API-backed systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and cloud integrations
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
