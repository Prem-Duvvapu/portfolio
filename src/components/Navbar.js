import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
    const [expand, setExpand] = useState(false);
    const [navColour, setNavColour] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavColour(true);
        } else {
            setNavColour(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false: "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-env">
                    <Nav className="ms-auto" defaultActiveky="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} />Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
                                <AiOutlineUser style={{ marginBottom: "2px" }} />About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/project" onClick={() => setExpand(false)}>
                                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
                                <CgFileDocument style={{ marginBottom: "2px" }} />Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;