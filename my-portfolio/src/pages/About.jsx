import { Container, Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaMicrochip,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend & Web Systems",
    icon: <FaLaptopCode />,
    items: ["PHP", "Laravel", "Spring Boot"],
  },
  {
    title: "Database Technologies",
    icon: <FaDatabase />,
    items: ["MySQL"],
  },
  {
    title: "Desktop Development",
    icon: <FaGraduationCap />,
    items: ["Java", "Java Swing", "C#", "Windows Forms"],
  },
  {
    title: "IoT & Embedded",
    icon: <FaMicrochip />,
    items: ["ESP8266", "ESP32", "RFID", "Sensors", "Embedded Logic"],
  },
  {
    title: "Tools & Collaboration",
    icon: <FaUsers />,
    items: ["Git", "GitHub", "Vite", "VS Code", "Team Collaboration"],
  },
];

export default function About() {
  return (
    <section className="about-page py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="About Me"
            subtitle="A professional overview of my academic background, interests, and technical capabilities."
          />

          <Row className="g-4 mb-5">
            <Col lg={7}>
              <div className="about-main-card h-100">
                <p>
                  I am a BSc (Hons) Computing student at the National Institute
                  of Business Management (NIBM), with a strong interest in
                  software development, modern web technologies, desktop
                  applications, and IoT-based solutions.
                </p>

                <p>
                  My work focuses on building practical systems with clean user
                  interfaces, structured logic, and real-world usefulness. I
                  enjoy working on projects that improve usability, solve
                  technical problems, and demonstrate both creativity and
                  problem-solving ability.
                </p>

                <p>
                  I have developed and contributed to projects in multiple
                  domains including React-based web applications, PHP and
                  Laravel systems, Java and C# desktop applications, and smart
                  IoT concepts involving RFID and embedded devices.
                </p>

                <p className="mb-0">
                  I am continuously improving my skills to become a
                  well-rounded software developer and prepare for internship
                  opportunities and the professional software industry.
                </p>
              </div>
            </Col>

            <Col lg={5}>
              <div className="about-side-card mb-4">
                <h4 className="about-card-title">Education</h4>
                <div className="about-info-item">
                  <FaGraduationCap />
                  <div>
                    <span className="about-label">Institute</span>
                    <p className="mb-0">
                      National Institute of Business Management
                    </p>
                  </div>
                </div>

                <div className="about-info-item">
                  <FaGraduationCap />
                  <div>
                    <span className="about-label">Program</span>
                    <p className="mb-0">BSc (Hons) Computing</p>
                  </div>
                </div>

                <div className="about-info-item">
                  <FaGraduationCap />
                  <div>
                    <span className="about-label">Current Level</span>
                    <p className="mb-0">Undergraduate Student</p>
                  </div>
                </div>
              </div>

              <div className="about-side-card">
                <h4 className="about-card-title">Career Focus</h4>
                <p className="mb-0">
                  Interested in frontend development, full-stack web systems,
                  software engineering, desktop applications, and IoT-based
                  smart solutions.
                </p>
              </div>
            </Col>
          </Row>

          <SectionTitle
            title="Technical Skills"
            subtitle="The main technologies and tools I currently work with."
          />

          <Row className="g-4">
            {skillGroups.map((group, index) => (
              <Col md={6} lg={4} key={group.title}>
                <motion.div
                  className="about-skill-card h-100"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.15 }}
                >
                  <div className="about-skill-icon">{group.icon}</div>
                  <h5 className="fw-bold mb-3">{group.title}</h5>

                  <div className="d-flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} className="tag-badge">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}