import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import quiz from "../../Assets/Projects/quiz.png";
import movieticket from "../../Assets/Projects/movieticket.png";
import portfolioimg from "../../Assets/Projects/portfolio.png"

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />

            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Projects</strong>
                </h1>

                {/* <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p> */}

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={portfolioimg}
                            isBlog={false}
                            title="My Portfolio"
                            description="My personal portfolio which features some of my github projects as well as my resume and technical skills."
                            ghLink="https://github.com/Prem-Duvvapu/portfolio"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={quiz}
                            isBlog={false}
                            title="quiz-app"
                            description="A Spring Boot-based microservices application that allows users to take quizzes categorized by topics. The application consists of two primary microservices — question-service and quiz-service — registered via a centralized service-registry using Netflix Eureka. "
                            ghLink="https://github.com/Prem-Duvvapu/quiz-app"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={movieticket}
                            isBlog={false}
                            title="Movie Reservation System in Golang"
                            description="The Movie Reservation System is a web application that allows users to manage movie reservations, including signing up, logging in, and making reservations for showtimes. Admins have additional functionalities for managing movies, showtimes, and user roles."
                            ghLink="https://github.com/Prem-Duvvapu/movie-reservation-system-in-golang"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects;