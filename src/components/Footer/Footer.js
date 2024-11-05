import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <Container>
        <Row>
          <Col md={4} sm={6} xs={12} className="text-md-start text-center">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12} className="text-md-start text-center">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li className='privacy-footer'><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col md={4} sm={12} xs={12} className="text-md-start text-center">
            <h5>Connect with Us</h5>
            <div className="social">
              <a href="#" className='m-3'><InstagramIcon /></a>
              <a href="#" className='m-3'><XIcon /></a>
            </div>
            <p className='footer-email'>Email: <a href="mailto:info@farmarket.com">info@farmarket.com</a></p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="text-center">
            <p>FarMarket © 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;