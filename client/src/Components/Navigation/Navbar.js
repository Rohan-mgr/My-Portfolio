import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo/Logo";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button/Button";

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
      className={showNavbar ? "navbar" : "hidden"}
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="light"
    >
      <Container fluid className="m-2">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
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
              <Nav.Link href="/#about">
                <span>01.</span>About
              </Nav.Link>
              <Nav.Link href="/#work">
                <span>02.</span>Work
              </Nav.Link>
              <Nav.Link className="nav-last" href="/#contact">
                <span>03.</span>Contact
              </Nav.Link>
              <div style={{ width: "100px" }}>
                <Button Padding="0.65rem 1rem">Resume</Button>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
