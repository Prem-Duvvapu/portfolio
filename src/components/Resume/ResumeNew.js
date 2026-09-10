import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Prem_Duvvapu_Resume.pdf";

const ResumeNew = () => {
    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />

                <Row style={{ justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <iframe
                        src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                        title="Prem Duvvapu Resume"
                        className="resume-frame"
                    />
                </Row>

            </Container>
        </div>
    );
}

export default ResumeNew;