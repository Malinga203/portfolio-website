import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
          Malinga.dev
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="nav-toggle" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

            <Nav.Link
              href="https://github.com/Malinga203"
              target="_blank"
              className="github-nav-link"
            >
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}