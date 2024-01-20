import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import { FaLink } from "react-icons/fa";

const Certification = () => {
  return (
    <Fragment>
      <h1 className="project-heading">
        <strong className="purple">Certifications</strong>
      </h1>
      <Card className="project-card-view mt-3 mb-5">
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <b>Responsive Web Designer</b>
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <a href="https://www.freecodecamp.org/certification/pooja_dl02/responsive-web-design">
              <FaLink />
            </a>{" "}
            Free Code Camp
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card-view mt-3 mb-5">
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <b>JavaScript Developer</b>
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <a href="https://www.freecodecamp.org/certification/pooja_dl02/javascript-algorithms-and-datastructures">
              <FaLink />
            </a>{" "}
            Free Code Camp
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="project-card-view mt-3 mb-5">
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <b>The Complete 2024 Web Development Bootcamp</b>
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <a href="https://www.freecodecamp.org/certification/pooja_dl02/responsive-web-design">
              <FaLink />
            </a>{" "}
            Udemy
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Certification;
