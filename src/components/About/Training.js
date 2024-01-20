import Card from "react-bootstrap/Card";
import Sharpener from "../../Assets/About/Sharpee.png";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FaBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Training = () => {
  return (
    <Fragment>
      <div align="center">
        <h1 className="project-heading">
          <strong className="purple">Training </strong>
        </h1>
      </div>
      <Card className="project-card-view mt-3 mb-5">
        <Row>
          <Col xs={4} md={1}></Col>
          <Col xs={4} md={2} className="my-auto">
            <Card.Img
              variant="top"
              src={Sharpener}
              alt="card-img"
              width="150px"
            />
          </Col>
          <Col xs={4} md={1}></Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b>Full Stack Trainee</b>
                <br />
                <FaBuilding /> Sharpener Tech, Bangalore, Karnataka
                <br />
                <i>
                  <MdDateRange /> Dec 2022-Present
                </i>
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    Trainee at the Sharpener, mastering DSA & honing React
                    front-end skills. Built projects like an E-commerce website,
                    Rental business app, expense tracker and mailbox handler
                    with optimized code and pretty designs.
                  </li>
                  <li>Learning the projects using MERN technologies</li>
                </ul>
              </Card.Text>

              {"\n"}
              {"\n"}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default Training;
