import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import "./NavScrollComponent.css"; // Custom styles

function NavScrollComponent() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary p-0 px-4 m-3 rounded-5 shadow" >
      <Container fluid>
        <Navbar.Brand href="#" id="logo">
          <img src="./logo.jpeg" width={40} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="w-100 h-auto">
          <Nav className="me-auto my-2 my-lg-0"  navbarScroll>
            <Nav.Link className="nav-item" href="#home">
              <span className="nav-link px-3">Home</span>
            </Nav.Link>
            <Nav.Link className="nav-item" href="#packages">
              <span className="nav-link px-3">Packages</span>
            </Nav.Link>
            <Nav.Link className="nav-item" href="#services">
              <span className="nav-link px-3">Services</span>
            </Nav.Link>
           
            <Nav.Link className="nav-item" href="#about">
              <span className="nav-link px-3">About</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control type="search" placeholder="Search" className="me-2 w-50 " aria-label="Search" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollComponent;
