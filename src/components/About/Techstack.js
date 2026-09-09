import { Col, Row } from "react-bootstrap";
import {
    DiJava,
    DiGo,           // Golang
    DiJavascript1,  // JavaScript
    DiRuby          // Ruby
} from "react-icons/di";

import {
    SiMysql,           // SQL (MySQL)
    SiRubyonrails,     // Ruby on Rails
    SiSpringboot,      // Spring Boot
    SiSpring,          // Spring Framework (Batch/Integration/Cloud)
    SiSpringsecurity,  // Spring Security
    SiHibernate        // Hibernate
} from "react-icons/si";


const Techstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiGo />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiRuby />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiRubyonrails />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiSpring />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiSpringsecurity />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiHibernate />
            </Col>
        </Row>
    )
}

export default Techstack;