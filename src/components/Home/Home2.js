import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
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
                            I’m a <i><b className="purple">backend software engineer</b></i> skilled in <b className="purple">Java</b>, <b className="purple">JavaScript</b>, <b className="purple">Golang</b>, and <b className="purple">SQL</b>, with experience across the <b className="purple">Spring</b> ecosystem — <b className="purple">Spring Boot</b>, <b className="purple">Spring Batch</b>, <b className="purple">Spring Data JPA</b>, <b className="purple">Spring Security</b>, <b className="purple">Spring Integration</b>, and <b className="purple">Spring Cloud</b> — along with <b className="purple">Hibernate</b>, <b className="purple">Quartz Scheduler</b>, and <b className="purple">Ruby on Rails</b>.

                            <br />
                            <br />

                            I deploy and operate services with <b className="purple">Docker</b>, <b className="purple">Kubernetes</b>, <b className="purple">GitHub Actions</b>, <b className="purple">AWS</b>, and <b className="purple">Jenkins</b>.
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
                                    rel = "noopener noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href = "https://www.linkedin.com/in/prem-duvvapu/"
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href = "https://leetcode.com/u/prem_duvvapu/"
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <SiLeetcode />
                                </a>
                            </li>

                            <li className="social-icons">
                                <a
                                    href = "https://codeforces.com/profile/prem_duvvapu"
                                    target = "_blank"
                                    rel = "noopener noreferrer"
                                    className = "icon-color home-social-icons"
                                >
                                    <SiCodeforces />
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