import { useMemo, useState } from "react";
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects, allTags } from "../data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = useMemo(() => {
    const term = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(term) ||
        project.short.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.tech.join(" ").toLowerCase().includes(term) ||
        project.tags.join(" ").toLowerCase().includes(term);

      const matchesTag =
        activeTag === "All" ||
        project.tags.some(
          (tag) => tag.toLowerCase() === activeTag.toLowerCase()
        );

      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <section className="projects-page py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Projects"
            subtitle="Explore my academic, personal, and contribution-based work across web, desktop, and IoT development."
          />

          <div className="projects-filter-box mb-4">
            <Row className="g-3 align-items-center">
              <Col lg={5}>
                <Form.Control
                  type="text"
                  placeholder="Search projects by title, keyword, or technology..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Col>

              <Col lg={7}>
                <div className="filter-tag-wrap">
                  <Button
                    variant={activeTag === "All" ? "light" : "outline-light"}
                    className="filter-tag-btn"
                    onClick={() => setActiveTag("All")}
                  >
                    All
                  </Button>

                  {allTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={activeTag === tag ? "light" : "outline-light"}
                      className="filter-tag-btn"
                      onClick={() => setActiveTag(tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>

            <div className="projects-result-line mt-3">
              <Badge className="projects-count-badge">
                {filteredProjects.length} Project
                {filteredProjects.length !== 1 ? "s" : ""}
              </Badge>
            </div>
          </div>

          <Row className="g-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <Col md={6} lg={4} key={project.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="h-100"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col>
                <div className="content-card text-center p-4">
                  <h4 className="mb-3">No matching projects found </h4>
                  <p className="mb-0">
                    Try a different keyword or select another tag.
                  </p>
                </div>
              </Col>
            )}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}