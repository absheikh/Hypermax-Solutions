import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <section className="sticky-top">
      <Navbar collapseOnSelect expand="lg" className="wrapper mb-3 mb-md-0">
        <Navbar.Brand href="/home">
          <img src={require("../assets/images/logo.svg").default} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="">
              <span className="link">
                <HashLink to="/#home">Home</HashLink>
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="link">
                <HashLink to="/#about-us">About</HashLink>
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="link">
                <HashLink to="/#courses">Courses</HashLink>
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="link">
                <HashLink to="/#gallery">Gallery</HashLink>
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="link">
                <HashLink to="/#news">News</HashLink>
              </span>
            </Nav.Link>
            <Nav.Link href="#">
              <span className="link">
                <HashLink to="/#contact">Contact</HashLink>
              </span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/register" className="register">
              <span class="primary-button">Register</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
