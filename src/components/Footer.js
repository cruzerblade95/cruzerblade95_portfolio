import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by Nabil Ajwad Rosedi</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {currentYear} Nabil Ajwad</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/cruzerblade95"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://mybc.tech"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio website"
              >
                <CgWebsite />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:nabilajwad10@gmail.com"
                style={{ color: "white" }}
                aria-label="Send email"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;