import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import headshot1 from "../../Assets/BeamishAlexHeadshot.jpg";
import headshot2 from "../../Assets/NeilaHeadshot.jpg";
import Toolstack from "./Toolstack";

function About() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              OUR <strong className="purple">STORY</strong>
            </h1>
            <Aboutcard />
          </Col>
          {!(700 < width && width < 1200) && (
          <Col
            md={5}
            style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', paddingBottom: "50px", alignItems: "center"}}
            className="about-img"
          >
            <div className="img-frame">
              <img src={headshot2} alt="about" className="img-headshot" />
            </div>
            <br />
            <p style={{fontSize: '1.3em'}}>Neila Toofuny, <i>Cofounder</i></p>
            <br />
            <br />
            <br />
            <div className="img-frame">
              <img src={headshot1} alt="about" className="img-headshot" />
            </div>
            <br />
            <p style={{fontSize: '1.3em'}}>Alex Beamish, <i>Cofounder</i></p>
          </Col>)}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
