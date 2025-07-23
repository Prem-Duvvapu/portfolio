import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote-mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am
                        <span className="purple">
                            Prem Duvvapu
                        </span>
                        from
                        <span className="purple">
                            Andhra Pradesh, India.
                        </span>

                        <br />

                        I have completed B. TEch in CSE at VRSEC, Vijayawada, Andhra Pradesh.

                        <br />
                        <br />

                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">
                        Prem
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;