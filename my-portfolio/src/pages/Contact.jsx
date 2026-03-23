import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section className="contact-page py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Contact"
            subtitle="Feel free to reach out for collaboration, academic projects, freelance opportunities, or professional networking."
          />

          <Row className="g-4">
            <Col lg={7}>
              <div className="contact-form-card">
                <h4 className="contact-card-title">Send a Message</h4>
                <p className="contact-card-text">
                  Use the form below to contact me directly. I’ll respond as soon as possible.
                </p>

                <Form
                  action="mailto:yourmail@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Enter message subject"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          name="message"
                          placeholder="Write your message"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Button type="submit" className="contact-submit-btn">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>

            <Col lg={5}>
              <div className="contact-info-card">
                <h4 className="contact-card-title">Get in Touch</h4>
                <p className="contact-card-text">
                  You can also connect with me through the platforms below.
                </p>

                <div className="contact-info-list">
                  <a
                    href="malingalakmal2003@gmail.com"
                    className="contact-info-item"
                  >
                    <FaEnvelope />
                    <span>malingalakmal2003@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/Malinga203"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info-item"
                  >
                    <FaGithub />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/malinga-lakmal"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-info-item"
                  >
                    <FaLinkedin />
                    <span>LinkedIn Profile</span>
                  </a>

                  <div className="contact-info-item static">
                    <FaMapMarkerAlt />
                    <span>Sri Lanka</span>
                  </div>
                </div>

                <div className="contact-note-box mt-4">
                  <h5 className="mb-2">Note</h5>
                  <p className="mb-0">
                    I am open to internships, collaborative student projects,
                    portfolio reviews, and professional networking opportunities.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}