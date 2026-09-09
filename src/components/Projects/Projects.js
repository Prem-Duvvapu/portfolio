import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import lldWithUi from "../../Assets/Projects/lld-with-ui.png";
import dsaWithUi from "../../Assets/Projects/dsa-with-ui.png";
import csFundamentalsWithUi from "../../Assets/Projects/cs-fundamentals-with-ui.png";
import sdeInterviewLoop from "../../Assets/Projects/sde-interview-loop.png";

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />

            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Projects</strong>
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={lldWithUi}
                            isBlog={false}
                            title="lld-with-ui"
                            description="SDE-2 interview prep portfolio of 60 Low-Level Design problems (Parking Lot, Uber, Splitwise, Elevator, and more), each with a Java 17 Spring Boot backend and a React 19/Vite frontend featuring interactive simulations, class diagrams, and design-pattern write-ups."
                            ghLink="https://github.com/Prem-Duvvapu/lld-with-ui"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dsaWithUi}
                            isBlog={false}
                            title="dsa-with-ui"
                            description="A full-stack DSA visualizer covering 400+ catalogued problems, each with a real step-by-step execution trace that highlights the exact line of Java code as it runs. Spring Boot backend, React/Vite frontend."
                            ghLink="https://github.com/Prem-Duvvapu/dsa-with-ui"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={csFundamentalsWithUi}
                            isBlog={false}
                            title="cs-fundamentals-with-ui"
                            description="An interactive CS fundamentals learning platform spanning Operating Systems, Computer Networks, DBMS, and the Java/Spring ecosystem across 63 curriculum topics, with hands-on simulators like CPU scheduling, page replacement, and B+ tree indexing."
                            ghLink="https://github.com/Prem-Duvvapu/cs-fundamentals-with-ui"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sdeInterviewLoop}
                            isBlog={false}
                            title="sde-interview-loop"
                            description="An AI-powered mock interview platform that runs full SDE-2 backend interview loops — DSA, LLD, HLD, CS fundamentals, Java deep-dive, and behavioral rounds — against an LLM, then scores each round against a rubric. Spring Boot + React."
                            ghLink="https://github.com/Prem-Duvvapu/sde-interview-loop"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;
