import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Reveal from "./Reveal";

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Reveal className="footer-cta">
          <div>
            <span className="eyebrow">
              Build something valuable
            </span>

            <h2>
              Have a product, platform, or
              engineering challenge?
            </h2>
          </div>

          <a
            className="button button-light"
            href="mailto:nabilajwad10@gmail.com"
          >
            Start a conversation
            <BsArrowUpRight />
          </a>
        </Reveal>

        <div className="footer-main">
          <div className="footer-brand">
            <Link
              className="brand-mark"
              to="/"
            >
              <span>NA</span>

              <div>
                <strong>Nabil Ajwad</strong>
                <small>Software Engineer</small>
              </div>
            </Link>

            <p>
              Building dependable products across
              AI, web, mobile, cloud, fintech, and
              Web3.
            </p>
          </div>

          <div className="footer-nav">
            <span>Navigate</span>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/resume">Résumé</Link>
          </div>

          <div className="footer-nav">
            <span>Connect</span>

            <a
              href="https://github.com/cruzerblade95"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:nabilajwad10@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Nabil Ajwad Rosedi
          </span>

          <span>
            Designed and engineered in Malaysia
          </span>

          <div className="footer-socials">
            <a
              href="https://github.com/cruzerblade95"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:nabilajwad10@gmail.com"
              aria-label="Email"
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;