import React from "react";
import { Link } from "react-router-dom";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiPackage,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-glow" aria-hidden="true" />

      <div className="portfolio-footer-container">
        <div className="portfolio-footer-main">
          <div className="portfolio-footer-brand">
            <Link to="/" className="footer-brand-link">
              cruzerblade<span>95</span>
            </Link>

            <p>
              Senior Software Engineer building full-stack,
              Flutter, AI, API, and AWS cloud solutions.
            </p>
          </div>

          <div className="portfolio-footer-navigation">
            <div className="footer-link-group">
              <h2>Navigation</h2>

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Projects</Link>
              <Link to="/resume">Resume</Link>
            </div>

            <div className="footer-link-group">
              <h2>Projects</h2>

              <Link to="/project/ai-client-sdk">
                AI Client SDK
              </Link>

              <Link to="/project/web3-ai-portfolio">
                Web3 AI Portfolio
              </Link>

              <Link to="/project/e-da-wallet">
                E-DA Wallet
              </Link>

              <Link to="/project/penang-smart-kariah">
                Smart Kariah
              </Link>
            </div>

            <div className="footer-link-group">
              <h2>Connect</h2>

              <a
                href="https://github.com/cruzerblade95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub aria-hidden="true" />
                GitHub
                <FiExternalLink
                  className="footer-external-icon"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin aria-hidden="true" />
                LinkedIn
                <FiExternalLink
                  className="footer-external-icon"
                  aria-hidden="true"
                />
              </a>

              <a
                href="https://www.npmjs.com/~cruzerblade95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiPackage aria-hidden="true" />
                npm
                <FiExternalLink
                  className="footer-external-icon"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-footer-bottom">
          <p>
            © {currentYear} Nabil Ajwad Rosedi. All rights
            reserved.
          </p>

          <p>
            Built with React and deployed on AWS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;