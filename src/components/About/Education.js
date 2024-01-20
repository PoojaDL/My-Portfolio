import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FaBuilding } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Education = () => {
  return (
    <Fragment>
      <div align="center">
        <h1 className="project-heading">
          <strong className="purple">Education </strong>
        </h1>
      </div>

      <Card className="project-card-view mt-3 mb-5">
        <Row>
          <Col xs={4} md={1}></Col>
          <Col xs={4} md={2} className="my-auto">
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/128/11722/11722631.png"
              alt="card-img"
              width="150px"
            />
          </Col>
          <Col xs={4} md={1}></Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <b>Computer Science and Engineering</b>
                <br />
                <FaBuilding /> GECK (VTU), Karnataka
                <br />
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <i>
                  <MdDateRange /> Aug 2019- June 2023
                </i>
                <h4>Percentage: 95.6%</h4>
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

export default Education;
