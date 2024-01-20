import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Pooja </span>
            from <span className="purple"> Mysore, Karnataka.</span>
            <br />
            I graduated from VTU Belgaum with a degree in computer science
            and engineering.
            <br />
            I am currently a MERN stack trainee at Sharpener Tech and
            <br />
            have internship experience working as a full-stack Python developer.
            <br />
            I found the MERN stack to be quite fascinating, so I switched 😅.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Baking
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Sci-Fi Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's the waves that intimidate, not the shores!."{" "}
          </p>
          <footer className="blockquote-footer">Poojadl02</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
