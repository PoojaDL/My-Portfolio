import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { CiMail } from "react-icons/ci";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              KNOW ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              A proficient{" "}
              <i>
                <b className="purple">Front End Developer </b>
              </i>{" "}
              with expertise in{" "}
              <i>
                <b className="purple">React.js, JavaScript, CSS, and HTML</b>
              </i>
              , specializing in creating optimized and efficient UI
              applications.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java and Javascript</b>
              </i>
              <br />
              <br />
              My passion for{" "}
              <i>
                <b className="purple">
                  web development, algorithms, and problem-solving{" "}
                </b>
              </i>
              has led me to develop versatile programming skills through years
              of practice and personal projects.
              <br />
              <br />I also utilize{" "}
              <i>
                <b className="purple"> Node.js, Express.js, and Next.js</b>
              </i>{" "}
              frameworks whenever possible to create products that align with my
              passion.
            </p>
          </Col>
          <Col md={4} className="myAvtar my-auto">
            <Tilt>
              <img src={myImg} className="img-fluid my-auto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PoojaDL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:poojadl2002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <CiMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pooja-dl-23267a218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/poojadl02/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
