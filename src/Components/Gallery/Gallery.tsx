import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Gallery.css";

const Gallery: React.FC = () => {
  const images: string[] = [
    "./images/g5.png",
    "./images/2.jpeg",
    "./images/1.jpeg",
    "./images/4.jpeg",
    "./images/g6.png",
    "./images/3.jpeg",
  ];

  return (
    <div className="gallery" id="gallery">
      <Container>
        <div className="main-text-2">
          <h1>
            G<span>allery</span>
          </h1>
        </div>
        <Row>
          {images.map((imgSrc, index) => (
            <Col md={4} className="py-3 py-md-0 mb-3" key={index}>
              <Card>
                <Card.Img
                  src={imgSrc}
                  alt={`Gallery ${index + 1}`}
                  height="230px"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
