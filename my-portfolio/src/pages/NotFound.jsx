import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-5">
      <Container>
        <div className="details-card text-center">
          <h1 className="fw-bold mb-3">404</h1>
          <p>The page you are looking for does not exist.</p>
          <Button as={Link} to="/" variant="light">
            Go Back Home
          </Button>
        </div>
      </Container>
    </section>
  );
}