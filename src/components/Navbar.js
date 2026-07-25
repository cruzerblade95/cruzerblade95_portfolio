import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/project",
  },
  {
    label: "Résumé",
    path: "/resume",
  },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

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

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={`site-navbar ${
        scrolled ? "site-navbar-scrolled" : ""
      }`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="brand-mark"
        >
          <span>NA</span>

          <div>
            <strong>Nabil Ajwad</strong>
            <small>Software Engineer</small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="portfolio-navigation"
          aria-label="Toggle navigation"
          onClick={() => {
            setExpanded((current) => !current);
          }}
        >
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="nav-links">
            {navigationLinks.map((link) => (
              <Nav.Link
                as={Link}
                to={link.path}
                key={link.path}
                className={
                  location.pathname === link.path
                    ? "active"
                    : ""
                }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <a
            className="nav-contact"
            href="mailto:nabilajwad10@gmail.com"
          >
            Let&apos;s talk
            <BsArrowUpRight />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;