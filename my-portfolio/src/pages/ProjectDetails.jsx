import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft, FaUserTie, FaCodeBranch } from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-5">
        <Container>
          <div className="details-card text-center">
            <h2 className="fw-bold mb-3">Project not found</h2>
            <p className="mb-4">The project you are looking for does not exist.</p>
            <Button as={Link} to="/projects" variant="light">
              <FaArrowLeft className="me-2" />
              Back to Projects
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="project-details-page py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Row className="g-4">
            <Col lg={8}>
              <div className="details-card h-100">
                <p className="project-meta mb-2">{project.category === "contribution" ? "Contribution Project" : "Featured Project"}</p>
                <h1 className="fw-bold mb-3">{project.title}</h1>
                <p className="project-lead-text">{project.description}</p>

                <div className="details-info-row mt-4">
                  <div className="details-info-box">
                    <FaUserTie />
                    <div>
                      <span className="details-label">Role</span>
                      <p className="mb-0">{project.role}</p>
                    </div>
                  </div>

                  <div className="details-info-box">
                    <FaCodeBranch />
                    <div>
                      <span className="details-label">Category</span>
                      <p className="mb-0 text-capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold mt-4 mb-3">Technologies Used</h5>
                <div className="d-flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} className="tag-badge">
                      {item}
                    </Badge>
                  ))}
                </div>

                <h5 className="fw-bold mt-4 mb-3">Project Highlights</h5>
                <ul className="list-clean">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={4}>
              <div className="details-side-card">
                <h5 className="fw-bold mb-3">Quick Actions</h5>

                <div className="d-grid gap-3">
                  <Button as={Link} to="/projects" variant="light">
                    <FaArrowLeft className="me-2" />
                    Back to Projects
                  </Button>

                  {project.github ? (
                    <Button
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline-light"
                    >
                      <FaGithub className="me-2" />
                      View GitHub Repository
                    </Button>
                  ) : (
                    <Button variant="outline-secondary" disabled>
                      Repository Link Not Available
                    </Button>
                  )}
                </div>

                <div className="details-note-box mt-4">
                  <h6 className="fw-bold mb-2">Project Note</h6>
                  <p className="mb-0">
                    This page highlights the project overview, technologies used,
                    and key contributions or features presented in the portfolio.
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