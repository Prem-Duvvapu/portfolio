import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote-mb-0">
                <p style={{ textAlign: "justify" }}>
                    I’m
                    <span className="purple"> Prem Duvvapu </span>
                    from
                    <span className="purple"> Andhra Pradesh, India</span>.

                    <br />
                    <br />

                    I completed my <span className="purple">B.Tech in Computer Science and Engineering (2020 - 2024)</span> at <span className="purple">VRSEC, Vijayawada</span>.

                    <br />
                    <br />

                    I’ve worked as a <span className="purple">Full-Stack Software Development Engineer</span> at <span className="purple">Vegrow</span>, a fast-growing startup, for <span className="purple">one year</span>, where I contributed to building scalable web applications and solving real-world problems.

                    <br />
                    <br />

                    Apart from coding, I enjoy activities that keep my mind engaged and creative:
                </p>

                <ul>
                    <li className="about-activity">
                    <ImPointRight /> Playing Games
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Listening to Music
                    </li>
                </ul>

                <p style={{ color: "rgb(155 126 172)" }}>
                    "The goal is simple: BE BETTER THAN YOU WERE YESTERDAY."
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