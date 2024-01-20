import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Certification from "./Certification";
import easyrent from "../../Assets/Projects/easyrent.png";
import mailbox from "../../Assets/Projects/mailbox.png";
import mic from "../../Assets/Projects/mic.png";
import xpense from "../../Assets/Projects/xpense.png";
import pg from "../../Assets/Projects/pg.jpeg";
import Publication from "./Publication";
import Snow from "../Snow";

function Projects() {
  return (
    <Fragment>
      <Container fluid className="project-section">
        <Snow />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={xpense}
                isBlog={false}
                title="X-pense Tracker"
                description="The project has been built to track the continuous expenses from the income utilizing technologies such as React, Node.js, Express.js, and MySQL. "
                ghLink="https://github.com/PoojaDL/Expense-Tracker-Frondend"
                demoLink="http://13.71.85.204:35879/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={mailbox}
                isBlog={false}
                title="Mail-Box-Client"
                description="Created a mailbox application that allows users to send, read, receive, and remove messages. Made use of Firebase for deployment and authentication and Redux for state management,"
                ghLink="https://github.com/PoojaDL/MailBox-Client"
                demoLink="https://mail-box-client-blue.vercel.app/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={mic}
                isBlog={false}
                title="Mart In Cart"
                description="It is an ECommerce website, has the fuctionality of adding items into cart and delete items from it. Built with React.js and used useContext for data management"
                ghLink="https://github.com/PoojaDL/E-Commerce-Website"
                demoLink="https://mart-in-cart-poojadl02.vercel.app/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={easyrent}
                isBlog={false}
                title="EasyRent (Machinery rental website)"
                description="A website with a UI design for machinery rental enables users to hire their equipment for either personal or commercial use. Machines can be found, compared, and reserved from a large range of vehicles that differ in category, model, size, and cost using the website's user-friendly interface."
                ghLink="https://github.com/PoojaDL/Machine-Rental"
                demoLink="https://easy-rent-poojadl02.vercel.app/"
              />
            </Col>

            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={pg}
                isBlog={false}
                title="FeelHome (Web Application to find Paying Guest)"
                description="It is website to find paying guest that made it 90% easy to find with 7+ amenities and according to the location the user chose on the website. Technologies included: Python, MySQL, Bootstrap, HTML, CSS, and Django."
                ghLink="https://github.com/PoojaDL/django_pg_finding_website"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
            </Col>
          </Row>

          <div align="center">
            <div align="center" className="certification">
              <Certification />
            </div>
            <div align="center" className="certification">
              <Publication />
            </div>
          </div>
        </Container>
      </Container>
    </Fragment>
  );
}

export default Projects;
