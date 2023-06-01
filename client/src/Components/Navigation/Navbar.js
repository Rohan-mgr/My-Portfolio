import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import Offcanvas from "react-bootstrap/Offcanvas";
import RohanCV from "../../Assets/Images/Rohan-CV.pdf";
import { Fade } from "react-awesome-reveal";

function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar
      className={`home__navbar ${showNavbar ? "" : "hidden"}`}
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
    >
      <Container fluid className="m-2">
        <Fade triggerOnce direction="down" duration={700}>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-md`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center flex-grow-1 text-center">
              <Fade triggerOnce direction="down" duration={700} delay={200}>
                <Nav.Link href="/#about">
                  <span>01.</span>About
                </Nav.Link>
              </Fade>
              <Fade triggerOnce direction="down" duration={700} delay={300}>
                <Nav.Link href="/#work">
                  <span>02.</span>Work
                </Nav.Link>
              </Fade>
              <Fade triggerOnce direction="down" duration={700} delay={400}>
                <Nav.Link className="nav-last" href="/#contact">
                  <span>03.</span>Contact
                </Nav.Link>
              </Fade>
              <Fade triggerOnce direction="down" duration={700} delay={500}>
                <div style={{ width: "100px" }}>
                  <a
                    className="primary-btn resume-btn"
                    href={RohanCV}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </Fade>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
