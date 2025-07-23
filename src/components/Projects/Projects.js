import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />

            <Container>
                <h1 className="project-heading">
                    My Recent
                    <strong className="purple">
                        Works
                    </strong>
                </h1>

                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            // imagPath={chatify}
                            isBlog={false}
                            title=""
                            description=""
                            ghLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;