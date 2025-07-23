import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiGit,
    SiGithub,
    SiAmazonaws,
    SiDocker,
    SiGithubactions,
    SiKubernetes,
} from "react-icons/si";

const Toolstack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiGit />
            </Col>
            
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws />
            </Col>
            
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiGithubactions />
            </Col>
            
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes />
            </Col>
        </Row>
    );
}

export default Toolstack;