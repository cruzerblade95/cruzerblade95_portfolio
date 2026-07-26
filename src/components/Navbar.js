import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FiBriefcase,
  FiFileText,
  FiMenu,
  FiX,
} from "react-icons/fi";

import logo from "../Assets/logo.png";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const isActiveRoute = (route) => {
    if (route === "/") {
      return location.pathname === "/";
    }

    if (route === "/project") {
      return location.pathname.startsWith("/project");
    }

    return location.pathname === route;
  };

  const closeNavigation = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={`portfolio-navbar ${
        scrolled ? "portfolio-navbar-scrolled" : ""
      }`}
    >
      <Container className="navbar-inner">
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          onClick={closeNavigation}
          className="portfolio-brand"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt=""
            className="portfolio-brand-logo"
          />

          <span className="portfolio-brand-text">
            cruzerblade<span>95</span>
          </span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="portfolio-navigation"
          aria-label={
            expanded
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => setExpanded((current) => !current)}
          className="portfolio-navbar-toggle"
        >
          {expanded ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="portfolio-navigation">
          <Nav className="ms-auto portfolio-navbar-links">
            <Nav.Link
              as={Link}
              to="/"
              onClick={closeNavigation}
              className={
                isActiveRoute("/") ? "active" : ""
              }
            >
              <AiOutlineHome aria-hidden="true" />
              <span>Home</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              onClick={closeNavigation}
              className={
                isActiveRoute("/about") ? "active" : ""
              }
            >
              <AiOutlineUser aria-hidden="true" />
              <span>About</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/project"
              onClick={closeNavigation}
              className={
                isActiveRoute("/project") ? "active" : ""
              }
            >
              <FiBriefcase aria-hidden="true" />
              <span>Projects</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/resume"
              onClick={closeNavigation}
              className={
                isActiveRoute("/resume") ? "active" : ""
              }
            >
              <FiFileText aria-hidden="true" />
              <span>Resume</span>
            </Nav.Link>

            <Nav.Link
              href="https://github.com/cruzerblade95"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeNavigation}
              className="navbar-github-link"
              aria-label="Open Nabil's GitHub profile"
            >
              <AiFillGithub aria-hidden="true" />
              <span>GitHub</span>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;