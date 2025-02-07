import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        
        <Row className="justify-content-center align-items-center">
          <Col md={8} className="text-center">
            <h3><b>Hello!</b></h3>

            <p> <b>
              I am a passionate and driven Software Developer with a strong foundation in both front-end and back-end technologies, including React, Bootstrap, JavaScript, Java, and Node.js. 
              My expertise lies in developing scalable, user-friendly digital experiences that enhance accessibility and efficiency.
            </b>
            </p>

            <p> <b>
              I hold a First-Class Master's degree in Software Engineering from the University of West London, along with a Bachelor’s degree in Computer Science. 
              My academic background, combined with hands-on experience, enables me to tackle complex technical challenges effectively. 
              I excel in working within Agile, cross-functional teams to build innovative and efficient software solutions.
            </b>
            </p>

            <p> <b>
              Beyond technical skills, I have a solid understanding of software development methodologies such as Agile, Scrum, and DevOps. 
              I am proficient in integrated development environments (IDEs) like Visual Studio Code and have hands-on experience with problem-solving, algorithm design, and computational complexity. 
              Staying updated with emerging technologies and industry trends is a priority for me, as I continuously strive to enhance my expertise.
            </b>
            </p>

            <p> <b>
              I am excited about opportunities to contribute to the development of scalable, high-performance software solutions that make a real impact. 
              Let's build something amazing together!
            </b>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
