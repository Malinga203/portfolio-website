import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Malinga Lakmal</p>
        <p className="footer-sub mb-0">
          Developer Portfolio • React • Bootstrap
        </p>
      </Container>
    </footer>
  );
}