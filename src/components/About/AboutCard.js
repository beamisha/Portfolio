import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Codempowr was founded in 2023 by Neila Toofuny and Alex Beamish, two undergraduates
            at Queen's University with a passion for both software development and social innovation.
            <br />
            <br />
            Prior to starting Codempowr, Neila was a founding member of The CINDER Project
            (formerly the BEAR project), which started as a club at Queen's devoted to creating
            software that serves BIPOC communities.
            <br />
            <br />
            Alex became involved with The CINDER Project after its inception in 2022 when he worked with
            Neila to develop the MamaRide mobile app, a free ridesharing app designed to provide a safer alternative
            to hitchhiking for BIPOC women. Having completed his undergraduate coursework in the
            Fall 2022 term, Alex decided to begin the next chapter by founding Codempowr with Neila.
            <br />
            <br />
            Together, through Codempowr, Neila and Alex are continuing the work of The CINDER Project while also widening 
            their focus to more general software projects in order to support the growth of Codempowr and fund The
            CINDER Project.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
