import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section className="py-5">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Feel free to connect with me for collaboration, academic work, or project discussions."
        />

        <Row className="g-4">
          <Col lg={7}>
            <div className="contact-card">
              <Form
                action="mailto:yourmail@gmail.com"
                method="post"
                encType="text/plain"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Write your message"
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="light">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={5}>
            <div className="contact-card h-100">
              <h5 className="fw-bold mb-3">Contact Links</h5>
              <p>
                You can reach me through GitHub or email for project collaboration
                and professional opportunities.
              </p>

              <div className="d-grid gap-3">
                <Button
                  as="a"
                  href="https://github.com/Malinga203"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-light"
                  className="contact-link-btn"
                >
                  <FaGithub className="me-2" />
                  GitHub Profile
                </Button>

                <Button
                  as="a"
                  href="mailto:yourmail@gmail.com"
                  variant="outline-light"
                  className="contact-link-btn"
                >
                  <FaEnvelope className="me-2" />
                  Email Me
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}