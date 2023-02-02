import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import cinderLogo from "../../Assets/cinderLogo.png";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
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
    <div>
      <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              The <strong className="purple">CINDER</strong> Project
            </h1>
            <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            CINDER (<a style={{color: '#4A87FF'}} href="https://thecinderproject.ca/">thecinderproject.ca</a>) stands for "Connecting Innovators, 
            Nurturing Demographic Equity and Representation". This project began in 2022
            when Neila Toofuny, Alec Trepanier and Talia Edwards formed a club at
            Queen's University. The purpose of the club was to tackle social issues by
            building software that benefits underrepresented or marginalized communities,
            with a specific focus on Black, Indigenous and People of Color (BIPOC).
            <br />
            <br />
            Now, The CINDER Project is in the process of being converted from a club at Queen's
            to a stand-alone project funded by Codempowr. The CINDER Project team,
            which currently consists of Neila Toofuny, Alex Beamish and Alec Trepanier,
            is actively working with partners and clients to develop software solutions that empower
            those who stand to benefit most.
            <br />
            <br />
            If you have a project that aligns with the mission of The CINDER Project,
            please <a style={{color: '#4A87FF'}} href="https://thecinderproject.ca/#contact">get in touch</a> with our team!
          </p>
        </blockquote>
          </Col>
          {!(700 < width && width < 1200) && (
            <Col
              md={5}
              style={{ display: "flex", flexDirection: "col", justifyContent: 'center', alignItems: 'center', paddingBottom: "50px", }}
              className="about-img"
            >
              <div className="img-frame2">
                <img src={cinderLogo} alt="about" className="img-cinder" />
              </div>
            </Col>)}
        </Row>
      </Container>
        <Particle />
      </Container>
    </div>
  );
}

export default ResumeNew;
