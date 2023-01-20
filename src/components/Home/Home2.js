import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const socialsEnabled = false
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              OUR<span className="purple"> SERVICES</span>
            </h1>
            <p className="home-about-body">
              We are a new kind of software solutions company that takes your software project from vision to reality in the most efficient way.
              <br />
              <br />We bring your business to the next level with custom&nbsp;
              <i>
                <b className="purple">web and mobile applications</b>.
              </i>
              &nbsp;that are beautiful and scalable.
              <br />
              <br />
              We take care of&nbsp;
              <i>
                <b className="purple">design, development and deployment</b>
              </i>
              &nbsp;so that you can take care of business.
              <br />
              <br />
              We believe in doing good while being good, and that's why we have a project devoted to connecting innovators and nurturing demographic equity and representation (The CINDER Project).
            </p>
          </Col>
        <Row>
          <Col md={12} className="home-about-social">
          <br />
          <br />
          <h1><span className="purple">CONTACT</span> US</h1>
            <br />
            <br />
            <h2>
              <p>13nat2@queensu.ca</p>
              <p>(613)-331-1436</p>
            </h2>
          </Col>
          {socialsEnabled && (
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>)}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
