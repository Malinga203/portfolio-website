import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="brand-logo">
          Malinga Lakmal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="nav-toggle" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center nav-menu">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

            <Nav.Link
              href="https://github.com/Malinga203"
              target="_blank"
              rel="noreferrer"
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