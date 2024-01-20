import Card from "react-bootstrap/Card";
import tC from "../../Assets/About/tC.png";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FaBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Experience = () => {
  return (
    <Fragment>
      <div align="center">
        <h1 className="project-heading">
          <strong className="purple">Experience </strong>
        </h1>
      </div>
      <Card className="project-card-view mt-3 mb-5">
        <Row>
          <Col xs={3} md={1}></Col>
          <Col xs={6} md={3} className="my-auto">
            <Card.Img variant="top" src={tC} alt="card-img" width="150px" />
          </Col>
          <Col xs={3} md={1}></Col>
          <Col xs={12} md={7}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b>Full Stack Python Developer -Intern</b>
                <br />
                <FaBuilding /> TechCentrix, Mysore, Karnataka
                <br />
                <i>
                  <MdDateRange /> Aug 2022-Sept 2022
                </i>
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    Using frameworks like Django and Bootstrap, I created and
                    examined over ten (10)+ visually appealing, mobile-friendly,
                    and responsive website contexts and elements utilizing
                    technologies like Python, MySQL, HTML, and CSS.
                  </li>
                  <li>
                    Created many small industry level websites under the
                    instructions of senior software developers.
                  </li>
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

export default Experience;
