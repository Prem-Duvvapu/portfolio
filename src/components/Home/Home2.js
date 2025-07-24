import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.png"

const Home2 = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em "}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I’m a <i><b className="purple">full-stack developer</b></i> skilled in <b className="purple">Java</b>, <b className="purple">Ruby</b>, <b className="purple">Golang</b>, and <b className="purple">SQL</b>, with experience in <b className="purple">Spring Boot</b> and <b className="purple">Ruby on Rails</b>.

                            <br />
                            <br />

                            I build modern UIs using <b className="purple">React.js</b> and <b className="purple">Tailwind CSS</b>, and deploy applications with <b className="purple">Docker</b>, <b className="purple">Kubernetes</b>, <b className="purple">GitHub Actions</b>, <b className="purple">AWS</b>, <b className="purple">Jenkins</b>, <b className="purple">New Relic</b>, and <b className="purple">CloudWatch</b>.
                        </p>

                    </Col>

                    <Col md={4} className="myAvatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>
                            FIND ME ON
                        </h1>
                        <p>
                            Feel free to <span className="purple">connect</span> with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href = "https://github.com/Prem-Duvvapu/"
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href = "https://www.linkedin.com/in/prem-duvvapu/"
                                    target = "_blank"
                                    rel = "noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home2;