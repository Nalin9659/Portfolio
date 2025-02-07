import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills, projects, and experience.',
    link: 'https://github.com/Nalin9659/Portfolio.git', 
  },
  {
    title: 'Uni-Mart Web Application',
    description: 'An e-commerce application designed for university students to buy and sell goods on campus.',
    link: 'https://github.com/uni-mart',
  },
  {
    title: 'To-Do-List Appication',
    description: 'A lightweight, efficient and scalable API for managing and storing notes. This porject provides a robust backend solutions for note-taking application, ensuring data presistance, CRUD operations and seamless integrations with modern frontend framework. This application is built with a focus on performance and user-cenrtric design, prviding developerswith a foundations for integrations note-taking functionaity into their projects.  ',
    link: 'https://github.com/Nalin9659/APIs-for-Note-taking-applications.git',
  }
];

const Portfolio = () => (
  <section id="portfolio" className="py-5">
    <Container>
      <h2 className="text-center mb-5"><b>My Work</b></h2>
      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.title} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.link && (
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Portfolio;
