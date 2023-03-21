import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/image 2.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function myNavbar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-5">
            <Nav.Link href="#" className="text-white">
              Menu
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              News
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              About Us
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Contact Us
            </Nav.Link>
            <Button className="nav-btn">Log in</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
