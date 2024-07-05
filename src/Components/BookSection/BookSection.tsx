import React, { useState ,ChangeEvent, FormEvent} from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import "./BookSection.css"

const BookSection:React.FC = () => {
  interface FormData {
    whereTo: string;
    howMany: string;
    arrival: string;
    leaving: string;
    nameAddress: string;
  }
  const [formData, setFormData] = useState<FormData>({
    whereTo: '',
    howMany: '',
    arrival: '',
    leaving: '',
    nameAddress: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="book" id="book">
      <Container>
        <div className="main-text">
          <h1>
            Book
          </h1>
        </div>
        <Row>
          <Col md={6} className="py-md-0">
            <Card>
              <Card.Img src="./booking.jpg" height={600} alt="Book" />
            </Card>
          </Col>
          <Col md={6} className="py-3 py-md-0">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formWhereTo">
                <Form.Control
                  type="text"
                  placeholder="Where to"
                  name="whereTo"
                  value={formData.whereTo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formHowMany">
                <Form.Control
                  type="text"
                  placeholder="How many"
                  name="howMany"
                  value={formData.howMany}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formArrival">
                <Form.Control
                  type="text"
                  placeholder="Arrival"
                  name="arrival"
                  value={formData.arrival}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formLeaving">
                <Form.Control
                  type="date"
                  placeholder="Leaving"
                  name="leaving"
                  value={formData.leaving}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formNameAddress">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your name & address"
                  name="nameAddress"
                  value={formData.nameAddress}
                  onChange={handleChange}
                />
              </Form.Group>
              <br />
              <Button type="submit" className="submit">
                Book now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookSection;
