import { Col, Row } from "react-bootstrap";
import { 
    DiJava,
} from "react-icons/di";

const Techstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
        </Row>
    )
}

export default Techstack;