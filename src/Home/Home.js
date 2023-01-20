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
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style = {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={codempowrName} className="img-name" alt="brand" /> 
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
            {!(650 < width && width < 1200) && (
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{textAlign: "left", paddingTop: 20, paddingRight: 10}}>
                  <strong className="home-text1">We. Empower. Trailblazers.&nbsp;</strong>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>)}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
