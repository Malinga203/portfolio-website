import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
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
              Back to Projects
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          <Col lg={8}>
            <div className="details-card h-100">
              <p className="project-meta mb-2">{project.role}</p>
              <h1 className="fw-bold mb-3">{project.title}</h1>
              <p>{project.description}</p>

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
            <div className="details-card">
              <h5 className="fw-bold mb-3">Quick Actions</h5>

              <div className="d-grid gap-2">
                <Button as={Link} to="/projects" variant="light">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}