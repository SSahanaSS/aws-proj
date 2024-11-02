import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ChequeMate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Scan</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#notifications" className="icon-link">
              <FaBell />
            </Nav.Link>
            <Nav.Link href="#messages" className="icon-link">
              <FaEnvelope />
            </Nav.Link>
            <Nav.Link href="#profile" className="icon-link">
              <FaUserCircle />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <style>{`
        .custom-navbar {
          background-color: #000; /* Black background */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000; /* Ensure navbar is above other content */
        }

        /* Add padding to the top of the body content so it's not hidden behind the fixed navbar */
        body {
          padding-top: 55px; /* Adjust this value based on the navbar's height */
        }

        .custom-navbar .navbar-brand {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fff; /* White color */
          transition: color 0.3s;
        }

        .custom-navbar .navbar-brand:hover {
          color: #f39c12; /* Gold color on hover */
        }

        .custom-navbar .nav-link {
          color: #fff; /* White color */
          font-size: 1rem;
          transition: color 0.3s;
        }

        .custom-navbar .nav-link:hover {
          color: #f39c12; /* Gold color on hover */
          text-decoration: underline;
        }

        .custom-navbar .nav-link.active {
          font-weight: bold;
          color: #f39c12; /* Gold color for active link */
        }

        .custom-navbar .icon-link {
          color: #fff; /* White color for icons */
          font-size: 1.2rem;
          margin-left: 0.5rem;
          transition: color 0.3s;
        }

        .custom-navbar .icon-link:hover {
          color: #f39c12; /* Gold color on hover for icons */
        }
      `}</style>
    </>
  );
}

export default ColorSchemesExample;
