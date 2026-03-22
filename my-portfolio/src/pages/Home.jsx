import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { featuredProjects, contributionProjects } from "../data/projects";
import profile from "../assets/malinga-lakmal.png";

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
  return (
    <div>
      <section className="hero-section pro-hero">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="hero-small">Hello, I am</p>

                <h1 className="hero-name">
                  Malinga <span>Lakmal</span>
                </h1>

                <h2 className="hero-role">
                  Building <span>Modern Digital Solutions</span>
                </h2>

                <p className="hero-description">
                  A passionate Computing student focused on creating professional
                  web, desktop, and IoT solutions with modern UI design and
                  real-world impact.
                </p>

                <div className="hero-buttons">
                  <Button className="btn-main" as={Link} to="/projects">
                    View Projects
                  </Button>

                  <Button
                    className="btn-outline"
                    as="a"
                    href="https://github.com/Malinga203"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </Button>

                  <Button
                    className="btn-outline"
                    as="a"
                    href="https://www.linkedin.com/in/malinga-lakmal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="me-2" />
                    LinkedIn
                  </Button>

                  <Button
                    className="btn-main"
                    as="a"
                    href="/cv/Malinga-Lakmal-CV.pdf"
                    download
                  >
                    <FaDownload className="me-2" />
                    CV
                  </Button>
                </div>

                <div className="skill-badges-wrap mt-4">
                  {skillBadges.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-badge"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                className="hero-image-pro"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src={profile} alt="Malinga Lakmal" />
                <div className="image-glow"></div>
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