import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaMicrochip,
  FaLinkedin,
  FaDownload,
  FaGlobe,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects, contributionProjects } from "../data/projects";
import profile from "../assets/my-photo.jpg";

const skillBadges = [
  "React",
  "Bootstrap",
  "JavaScript",
  "PHP",
  "Laravel",
  "Java",
  "C#",
  "MySQL",
  "IoT",
  "ESP32",
];

const services = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
    text: "Building responsive and modern web applications with clean UI, strong usability, and practical workflows.",
  },
  {
    icon: <FaServer />,
    title: "System Development",
    text: "Developing structured desktop and backend-focused systems for academic and real-world use cases.",
  },
  {
    icon: <FaDatabase />,
    title: "Database & IoT Solutions",
    text: "Working with database-driven systems and smart IoT projects that solve practical problems.",
  },
];

export default function Home() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, 55]);
  const imageRotate = useTransform(scrollY, [0, 500], [0, -3]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.03]);
  const bgOpacity = useTransform(scrollY, [0, 400], [0.2, 0.45]);

  return (
    <div>
      <section className="hero-section">
        <motion.div
          className="hero-bg-orb hero-bg-orb-1"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="hero-bg-orb hero-bg-orb-2"
          style={{ opacity: bgOpacity }}
        />

        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <motion.div
                className="hero-image-wrapper"
                style={{ y: imageY }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="hero-image-card"
                  style={{
                    rotate: imageRotate,
                    scale: imageScale,
                  }}
                >
                  <img
                    src={profile}
                    alt="Malinga Lakmal"
                    className="hero-profile-image"
                  />

                  <div className="hero-mini-badge">
                    Available for Projects
                  </div>
                </motion.div>
              </motion.div>
            </Col>

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
                  Building{" "}
                  <span className="typewriter-text">
                    Web, Desktop & IoT Solutions
                  </span>
                </h1>

                <p className="hero-text">
                  I’m Malinga Lakmal, a BSc (Hons) Computing student passionate
                  about creating modern web applications, desktop systems, and
                  IoT-based projects that solve real-world problems with clean,
                  practical, and user-friendly solutions.
                </p>

                <div className="hero-actions d-flex flex-wrap gap-3 mt-4">
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

                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/malinga-lakmal"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-info"
                    size="lg"
                  >
                    <FaLinkedin className="me-2" />
                    LinkedIn
                  </Button>

                  <Button
                    as="a"
                    href="/cv/Malinga-Lakmal-CV.pdf"
                    download
                    variant="info"
                    size="lg"
                  >
                    <FaDownload className="me-2" />
                    Download CV
                  </Button>
                </div>

                <div className="skill-badges-wrap mt-4">
                  {skillBadges.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="hero-stats-card mt-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
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
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <SectionTitle
            title="What I Do"
            subtitle="My main areas of development and technical focus."
          />
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={service.title}>
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </motion.div>
              </Col>
            ))}
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
            {contributionProjects.length > 0 ? (
              contributionProjects.map((project) => (
                <Col md={6} lg={4} key={project.slug}>
                  <ProjectCard project={project} />
                </Col>
              ))
            ) : (
              <Col>
                <div className="content-card">
                  <p className="mb-0">
                    Contribution projects will be added here soon.
                  </p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}