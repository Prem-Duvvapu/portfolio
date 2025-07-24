import { Col, Row } from "react-bootstrap";
import { 
    DiJava,
    DiGo,           // Golang
    DiJavascript1,  // JavaScript
    DiRuby          // Ruby
} from "react-icons/di";

import {
    SiMysql,         // SQL (MySQL)
    SiRubyonrails,   // Ruby on Rails
    SiSpringboot,    // Spring Boot
    SiReact,         // React.js
    SiTailwindcss    // Tailwind CSS
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
                <SiReact />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss />
            </Col>
        </Row>
    )
}

export default Techstack;