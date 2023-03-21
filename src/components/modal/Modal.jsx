import React, { useState } from "react";

import "./modal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    return setModal(!modal);
  };

  return (
    <>
      <Navbar bg="primary" expand="lg" className="navbar">
        <Container className="myContainer">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-5">
              <Nav.Link href="#home" onClick={toggleModal}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" onClick={toggleModal}>
                About
              </Nav.Link>
              <Nav.Link href="#link" onClick={toggleModal}>
                Link
              </Nav.Link>
              <Nav.Link href="#link" onClick={toggleModal}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modal && (
        <Container className="modalContainer">
          <div className="modalWrapper">
            <div className="para">
              <h2>Hey! I am a modal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                hic deleniti! Assumenda labore nulla eligendi, voluptas eveniet
                rerum enim alias blanditiis debitis odit sapiente repellendus
                impedit officiis dicta voluptates sit.
              </p>
            </div>
            <button className="closeBtn" onClick={toggleModal}>&times;</button>
          </div>
        </Container>
      )}
    </>
  );
};

export default Modal;
