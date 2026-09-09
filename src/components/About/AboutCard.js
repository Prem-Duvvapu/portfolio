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

                    I’m currently working as an <span className="purple">SDE-1 Backend Engineer</span> at <span className="purple">Osfin</span>, a fintech reconciliation automation platform, where I design rollback flows for datasets of up to 1 crore (10M+) records, manage Quartz Scheduler triggers across 120 reconciliation batch jobs, and build multi-channel notification systems — while triaging 50+ production incidents on-call.

                    <br />
                    <br />

                    Before that, I worked as a <span className="purple">Software Development Engineer</span> at <span className="purple">Vegrow</span>, a B2B agritech marketplace for fruits, where I built APIs and microservices in Ruby on Rails and Golang to manage supply chain operations at scale.

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