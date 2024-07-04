import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"

const Footer :React.FC= () => (
  <footer className="page-footer font-small bg-black text-white-50 pt-4">
    <Container fluid className="text-center text-md-left">
      <Row>
        <Col md={6} className="mt-md-0 mt-3 align-items-start">
          <img src="./logo.jpeg" height={100} alt="" />
          <p>Enjoy Your Travel Journy</p>
        </Col>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <Col md={3} className="mb-md-0 mb-3 card-footer">
          <ul className="footer-links">
          <h5 className="text-uppercase">Menu</h5>
            <li className="list-unstyled">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#packages">Package</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </Col>

       
      </Row>
    </Container>

    <div className="text-center py-3">© 2020 Copyright:Wonderlust</div>
  </footer>
);

export default Footer;
