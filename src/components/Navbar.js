import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { CgWebsite, CgFileDocument } from "react-icons/cg";
import {
  AiFillLinkedin,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setNavColour(window.scrollY >= 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeNavigation() {
    setExpanded(false);
  }

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img
            src={logo}
            className="img-fluid logo"
            alt="Nabil Ajwad portfolio logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={closeNavigation}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={closeNavigation}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={closeNavigation}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={closeNavigation}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://mybc.tech"
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite style={{ marginBottom: "2px" }} /> Website
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
              >
                <AiFillLinkedin style={{ fontSize: "1.2em" }} /> LinkedIn
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;