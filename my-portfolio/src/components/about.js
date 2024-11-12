import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/IMG_1126.JPEG'; 
const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            
            <Image
              src={profileImage}
              alt="Profile"
              roundedCircle
              fluid
              style={{ width: '500px', height: '500px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={8}>
            
            <h3>Hello, I'm Nalin Patel</h3>
            <p>
              with a solid background in front-end and backeend technologies, such as React, bootstrap, JavaScript, Java, Nodejs, aand responsive design, I am a passionate and driven sooftware Developer.
              I have practical expertise developing scalable online apps that increase user accessibility and efficiency, and I have a strong affection for developing user-friendly digital experiences.
            <br></br>
              I have a First-class master degree in software engineering from the University of West London and bechlor's degree in computer science, with the very good experience in technologie I can 
              handle copmlicated technical problems while working in agile, cross-function teams beacause of my academic education and real-world experience.
              <br></br> 
              In adition to my technical skill, i have a firm understanding of software developement methodologies, incliding Agile, Scrum, DevOps, and I am competent in using integrated Developement
              Environment(IDEs), particularly Visual Studio Code. My academic projects have provided me with haands-on experience in problem-solving and algorithms, especially in the realms of data structures,
              algorithms designs, and comutational complexity. I am passionate about continuous learning and staying updated with current trends and technologies in the field. I am excited about potential
              to contribute to the developement of scalable and efficient software solutions. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
