import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LuHotel } from "react-icons/lu";
import { PiForkKnifeFill } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { BsFillBusFrontFill } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import "./Services.css"
import { GrUserManager } from "react-icons/gr";


const Services :React.FC= () => {
  interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  const services:Service[] = [
    {
      icon: <LuHotel className='htl-icon' />,
      title: 'Affordable Hotel',
      description: 'Affordable hotels offering great value for your stay. Enjoy comfortable accommodations and excellent service at budget-friendly prices.',
    },
    {
      icon: <PiForkKnifeFill className='htl-icon' />,
      title: 'Food & Drinks',
      description: 'Delicious food and drinks available for all tastes. Experience a variety of culinary delights from local favorites to international cuisines.',
    },
    {
      icon: <HiOutlineSpeakerphone className='htl-icon' />,
      title: 'Safety Guide',
      description: 'Comprehensive safety guide for a secure journey. Stay informed about safety protocols, emergency contacts, and travel tips for a worry-free experience.',
    },
    {
      icon:<BsFillBusFrontFill className='htl-icon' />,
      title: 'Transportation Services',
      description: 'Reliable transportation services to get you to your destination comfortably and on time. Choose from options including private transfers .',
    },
    {
        icon: <FaCloudSun  className='htl-icon' />,
        title: 'Outdoor Activities',
        description: 'Enjoy outdoor activities such as hiking, beach visits, and sightseeing tours in sunny destinations.',
      },
    {
      icon: <GrUserManager className='htl-icon'/>,
      title: 'Tour Guides',
      description: 'Professional tour guides to enhance your travel experience with insightful knowledge about local attractions and cultural landmarks.',
    },
  ];

  return (
    <div className="services" id="services">
      <Container>
        <div className="main-text-2">
          <h1>
            <span>S</span>ervices
          </h1>
        </div>
        <Row style={{ marginTop: '30px' }}>
          {services.map((service, index) => (
            <Col md={4} className="py-3 py-md-3" key={index}>
            <Card className='card h-100 shadow-sm' style={{ border: 'none', borderRadius: '10px', backgroundColor: '#ffffff' }}>
              <Card.Body className='card-body'>
                {/* <i className={service.icon}></i> */}
                {service.icon}
                <Card.Title className='fw-bolder' style={{ fontSize: 25, marginBottom: '15px' }}>{service.title}</Card.Title>
                <Card.Text style={{ fontSize: '16px' }}>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
