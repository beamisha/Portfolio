import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import codempowrName from "../../Assets/name.png";
//import ChangeText from "./ChangeText";

function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
   if (width < 600)  {
     return (
      <section>
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
            <h1 style={{ fontSize: "3.2em", paddingBottom: "20px" }}>
              <strong className="purple">codempowr</strong>
            </h1>
            <h2>We. Empower. Trailblazers.</h2>
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
    </section>
     )
   }
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
            <Col md={7} className="home-header">
              <div style = {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <strong className="main-name">codempowr&nbsp;</strong>
                <br />
                <br />
                <br />
                <p className="home-text2">Building...<Type/></p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Col>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
