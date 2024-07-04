import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Home.css"
const Home:React.FC = () => {
  return (
    <div className="home" id='home'>
      <Container>
        <Row>
          <Col>
            <div className="content">
              <h5>Welcome To World</h5>
              <h1>Visit <span className="chanagecontent"></span></h1>
              <p>
              Discover breathtaking destinations and immerse yourself in unique experiences.<br/> Explore the world like never before.
              </p>
              <Button href="#book" className="btn-custom">
                Book Place
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
