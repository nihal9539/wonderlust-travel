import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./AboutUs.css"
const AboutUs :React.FC= () => {
  return (
    <div className="about" id="about">
      <Container>
        <div className="main-text-2">
          <h1>
            About <span>us</span>
          </h1>
        </div>
        <Row style={{ marginTop: "20px" }}>
          <Col md={6} className="py-3">
            <Card>
              <Card.Img src="./bg-2.jpeg" alt="About us" />
            </Card>
          </Col>
          <Col md={6} className="py-3">
            <h2>How Travel Agency Works</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tempore rerum iste doloribus suscipit veniam et maxime
              voluptates, nulla
            </p>
            <Button id="about-btn" variant="primary">
              Read More...
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
