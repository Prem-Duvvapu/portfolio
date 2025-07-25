import { Button, Card } from "react-bootstrap";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img  variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>

                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>

                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub />
                    {props.isBlog ? "Blog" : "Github"}
                </Button>
                {"\n"}
                {"\n"}

                {/* {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite />
                        {"Demo"}
                    </Button>
                )} */}
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;