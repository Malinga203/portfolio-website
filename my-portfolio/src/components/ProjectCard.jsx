import { Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Card className="project-card h-100">
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
          <Card.Text className="project-short">{project.short}</Card.Text>

          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <Badge key={tag} className="tag-badge">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-auto d-flex gap-2 flex-wrap">
            <Button as={Link} to={`/projects/${project.slug}`} variant="light">
              Details
            </Button>

            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                variant="outline-light"
              >
                GitHub
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}