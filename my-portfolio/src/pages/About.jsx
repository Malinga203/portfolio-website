import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    Backend: ["PHP", "Laravel", "Spring Boot"],
    Database: ["MySQL"],
    Desktop: ["Java", "Java Swing", "C#", "Windows Forms"],
    IoT: ["ESP8266", "ESP32", "RFID", "Sensors", "Embedded Logic"],
    Tools: ["Git", "GitHub", "Vite", "VS Code"],
  };

  return (
    <section className="py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="About Me"
            subtitle="My academic background, technical interests, and development focus."
          />

          <Row className="g-4">
            <Col lg={7}>
              <div className="content-card">
                <p>
                  I am a first-year BSc (Hons) Computing student at the National
                  Institute of Business Management (NIBM). I am passionate about
                  software development and enjoy building practical systems that
                  combine good design, structured logic, and real-world value.
                </p>

                <p>
                  My experience includes React frontend development, PHP and
                  Laravel web systems, Java and C# desktop applications, and
                  IoT-based project development using embedded devices and sensor
                  concepts.
                </p>

                <p className="mb-0">
                  I have also contributed to HTML and PHP-based systems such as
                  a Hotel Management System, where I supported system structure,
                  interface-related work, and implementation improvements.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="content-card">
                <h5 className="fw-bold mb-3">Education</h5>
                <p className="mb-1">National Institute of Business Management</p>
                <p className="project-meta mb-0">BSc (Hons) Computing • 1st Year</p>
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <SectionTitle
              title="Skills"
              subtitle="Technologies and tools I use across my projects."
            />

            <Row className="g-4">
              {Object.entries(skills).map(([group, values]) => (
                <Col md={6} lg={4} key={group}>
                  <div className="content-card h-100">
                    <h5 className="fw-bold mb-3">{group}</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {values.map((item) => (
                        <Badge key={item} className="tag-badge">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}