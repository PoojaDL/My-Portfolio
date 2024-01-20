import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import { FaLink } from "react-icons/fa";

const Publication = () => {
  return (
    <Fragment>
      <h1 className="project-heading">
        <strong className="purple">Publication </strong>
      </h1>
      <Card className="project-card-view mt-3 mb-5">
        <Card.Body>
          <Card.Title style={{ textAlign: "left" }}>
            <b>
              Prediction of Agricultural Crop Price and Machinery Rental Price
              using Machine Learning Algorithm
            </b>
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            <a href="https://www.ijsdr.org/papers/IJSDR2305366.pdf">
              <FaLink />
            </a>{" "}
            International Journal Of Scientific Development AND Research
            <br />
            <b>DOI: http://doi.one/10.1729/Journal.36200</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Publication;
