import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import mamaRideImg from "../../Assets/Projects/MamaRideImg1.jpg";
import clientWorkImg from "../../Assets/Projects/ClientWorkImg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          OUR <strong className="purple">PORTFOLIO</strong>
        </h1>
        <p style={{ color: "white" }}>
          This is a place to showcase the work we've done for clients, as well as on our original projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mamaRideImg}
              hasLink={true}
              title="MamaRide"
              description="A rideshare app designed to provide a safer alternative to hitchhiking for BIPOC women. 
              The app is currently in the final stages of development, and beta testing is set to take place in the coming months."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://thecinderproject.ca/portfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clientWorkImg}
              hasLink={false}
              title="Client Work"
              description="Coming Soon!"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
