import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Experience from "./Experience";
import Training from "./Training";
import Education from "./Education";
import Snow from "../Snow";

function About() {
  return (
    <Container fluid className="about-section">
      <Snow />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Experience />
        <Training />
        <div align="center">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </div>
        <Techstack />
        <Education />
      </Container>
    </Container>
  );
}

export default About;
