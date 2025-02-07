import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container>
      <Row className="text-center">
        <Col>
          <p>&copy; 2024 Nalin Patel. All Rights Reserved.</p>
          <div>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <FaLinkedin size={28} />
            </a>
          </div>
        </Col>  
      </Row>
    </Container>
  </footer>
);

export default Footer;
