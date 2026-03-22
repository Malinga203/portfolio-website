import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaCode, FaLaptopCode, FaMicrochip } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects, contributionProjects } from "../data/projects";
import profile from "../assets/my-photo.jpg";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Badge className="hero-badge mb-3">
                  Undergraduate Computing Student
                </Badge>

                <h1 className="hero-title">
                  Building Web, Desktop & IoT Solutions with a Professional Mindset
                </h1>

                <p className="hero-text">
                  I’m Malinga Lakmal, a BSc (Hons) Computing student passionate
                  about creating modern web applications, desktop systems, and
                  IoT-based projects that solve real-world problems with clean,
                  practical, and user-friendly solutions.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Button as={Link} to="/projects" variant="light" size="lg">
                    View Projects
                  </Button>

                  <Button
                    as="a"
                    href="https://github.com/Malinga203"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-light"
                    size="lg"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-image-wrapper"
              >
                <div className="hero-image-card">
                  <img
                    src={profile}
                    alt="Malinga Lakmal"
                    className="hero-profile-image"
                  />

                  <div className="hero-mini-badge">
                    <span>Available for Projects</span>
                  </div>
                </div>

                <motion.div
                  className="hero-stats-card mt-4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="stat-item">
                    <FaCode />
                    <div>
                      <h4>{featuredProjects.length + contributionProjects.length}+</h4>
                      <p>Projects & Contributions</p>
                    </div>
                  </div>

                  <div className="stat-item">
                    <FaLaptopCode />
                    <div>
                      <h4>Web + Desktop</h4>
                      <p>React, PHP, Java, C# and full project development</p>
                    </div>
                  </div>

                  <div className="stat-item">
                    <FaMicrochip />
                    <div>
                      <h4>IoT Focus</h4>
                      <p>Embedded systems and smart safety project experience</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of my major academic and personal projects."
          />
          <Row className="g-4">
            {featuredProjects.slice(0, 6).map((project) => (
              <Col md={6} lg={4} key={project.slug}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <SectionTitle
            title="Contributions"
            subtitle="Projects where I contributed to implementation, UI, or system improvement tasks."
          />
          <Row className="g-4">
            {contributionProjects.map((project) => (
              <Col md={6} lg={4} key={project.slug}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}